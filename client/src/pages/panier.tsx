import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/lib/cart";

export default function Panier() {
  const { state, updateQty, removeItem, clearCart, total } = useCart();

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white text-foreground min-h-screen">
      <Navbar />

      <main className="container max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-display mb-6">Votre panier</h1>

        {state.items.length === 0 ? (
          <div className="card-premium p-8 text-center">
            <p className="mb-4">Votre panier est vide.</p>
            <a href="/products" className="btn-primary">Voir les produits</a>
          </div>
        ) : (
          <div className="space-y-4">
            {state.items.map((it) => (
              <div key={it.id} className="card-premium p-4 flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-foreground/70">€{it.price.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-3">
                  <input type="number" min={1} value={it.qty} onChange={(e) => updateQty(it.id, Math.max(1, Number(e.target.value || 1)))} className="w-20 px-3 py-1 rounded-md border" />
                  <div className="font-semibold">€{(it.price * it.qty).toFixed(2)}</div>
                  <button className="text-sm text-red-500" onClick={() => removeItem(it.id)}>Supprimer</button>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between p-4 border-t border-foreground/10">
              <div className="font-semibold">Total</div>
              <div className="font-bold">€{total().toFixed(2)}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/products" className="btn-outline py-3 text-center">Continuer mes achats</a>
              <button className="btn-primary py-3" onClick={() => { clearCart(); alert('Merci — commande simulée'); }}>Passer commande</button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
