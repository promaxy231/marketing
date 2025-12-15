import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";

type CartItem = { id: string; title: string; price: number; qty: number };

export default function Panier() {
  const [items, setItems] = useState<CartItem[]>([
    { id: '1', title: 'Coffret Zen', price: 29.99, qty: 1 },
  ]);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      <main className="container max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-display mb-6">Panier</h1>

        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.id} className="card-premium p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-foreground/70">{it.qty} × €{it.price.toFixed(2)}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">€{(it.price * it.qty).toFixed(2)}</div>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between p-4 border-t border-foreground/10">
            <div className="font-semibold">Total</div>
            <div className="font-bold">€{total.toFixed(2)}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="btn-outline py-3">Continuer mes achats</button>
            <button className="btn-primary py-3">Passer commande</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
