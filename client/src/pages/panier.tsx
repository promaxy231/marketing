import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/lib/cart";
import { FloatingBubbles } from "@/components/animations/FloatingBubbles";
import { BackgroundParticles } from "@/components/3d/BackgroundParticles";

export default function Panier() {
  const { state, updateQty, removeItem, clearCart, total } = useCart();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <BackgroundParticles />
        <FloatingBubbles count={3} />
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display mb-2">Votre <span className="text-gradient">Panier</span></h1>
          <p className="text-foreground/70">Vérifiez vos articles et passez votre commande en toute simplicité.</p>
        </div>
      </section>

      <main className="container max-w-4xl mx-auto py-12 px-6">
        {state.items.length === 0 ? (
          <div className="card-premium p-8 text-center">
            <p className="mb-4">Votre panier est vide.</p>
            <a href="/products" className="btn-primary">Voir les produits</a>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-3">
              {state.items.map((it) => (
                <div key={it.id} className="card-premium p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold text-lg">{it.title}</div>
                    <div className="text-foreground/70">Prix unitaire: €{it.price.toFixed(2)}</div>
                  </div>
                  <div className="flex items-center gap-4 mt-3 md:mt-0">
                    <label className="sr-only">Quantité pour {it.title}</label>
                    <input aria-label={`Quantité ${it.title}`} type="number" min={1} value={it.qty} onChange={(e) => updateQty(it.id, Math.max(1, Number(e.target.value || 1)))} className="w-20 px-3 py-1 rounded-md border bg-foreground/8 text-foreground" />
                    <div className="font-semibold">€{(it.price * it.qty).toFixed(2)}</div>
                    <button className="text-sm text-red-500 hover:underline" onClick={() => removeItem(it.id)}>Supprimer</button>
                  </div>
                </div>
              ))}
            </div>

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
