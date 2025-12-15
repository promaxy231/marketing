import React, { createContext, useContext, useEffect, useReducer } from "react";

export type CartItem = { id: string; title: string; price: number; qty: number };

type State = { items: CartItem[] };

type Action =
  | { type: "hydrate"; payload: State }
  | { type: "add"; payload: CartItem }
  | { type: "remove"; payload: { id: string } }
  | { type: "updateQty"; payload: { id: string; qty: number } }
  | { type: "clear" };

const initialState: State = { items: [] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return action.payload;
    case "add": {
      const found = state.items.find((i) => i.id === action.payload.id);
      if (found) {
        return {
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + action.payload.qty } : i
          ),
        };
      }
      return { items: [...state.items, action.payload] };
    }
    case "remove":
      return { items: state.items.filter((i) => i.id !== action.payload.id) };
    case "updateQty":
      return { items: state.items.map((i) => (i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i)) };
    case "clear":
      return { items: [] };
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: State;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  total: () => number;
} | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("zenflow_cart");
      if (raw) dispatch({ type: "hydrate", payload: JSON.parse(raw) });
    } catch (e) {
      // ignore
    }
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem("zenflow_cart", JSON.stringify(state));
    } catch (e) {}
  }, [state]);

  const addItem = (item: CartItem) => dispatch({ type: "add", payload: item });
  const removeItem = (id: string) => dispatch({ type: "remove", payload: { id } });
  const updateQty = (id: string, qty: number) => dispatch({ type: "updateQty", payload: { id, qty } });
  const clearCart = () => dispatch({ type: "clear" });
  const total = () => state.items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQty, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export default { CartProvider, useCart };
