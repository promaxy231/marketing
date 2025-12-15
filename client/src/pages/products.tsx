import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import chronograph from "@assets/generated_images/premium_luxury_chronograph_watch.png";
import audio from "@assets/generated_images/luxury_wireless_audio_headphones.png";
import accessories from "@assets/generated_images/premium_essential_accessories_collection.png";
import { useCart } from "@/lib/cart";

const products = [
  {
    category: "Precision Timepieces",
    title: "The Chronograph Elite",
    desc: "Engineered from polished titanium and aerospace-grade carbon fiber for a lifetime of precision.",
    features: ["72-Hour Kinetic Reserve", "Scratch-Resistant Sapphire", "Water Resistant to 300m", "Swiss Movement"],
    price: "$2,450",
    priceNumber: 2450,
    image: chronograph
  },
  {
    category: "Integrated Audio",
    title: "The Acoustics Master",
    desc: "Tuned by master acousticians for an immersive experience, wrapped in hand-stitched leather.",
    features: ["40-Hour Battery Life", "Silent Mode Integration", "Lossless Audio Support", "Premium Materials"],
    price: "$1,890",
    priceNumber: 1890,
    image: audio
  },
  {
    category: "Essential Accessories",
    title: "The Refined Collection",
    desc: "Carefully curated accessories that seamlessly integrate into a powerful, sophisticated workflow.",
    features: ["Lifetime Durability", "Minimal Design", "Ethically Sourced", "Premium Finishes"],
    price: "Starting at $485",
    priceNumber: 485,
    image: accessories
  }
];

export default function Products() {
  const { addItem } = useCart();

  const addToCart = (product: any) => {
    addItem({ id: product.title, title: product.title, price: product.priceNumber ?? 0, qty: 1 });
    // small feedback
    alert(`${product.title} ajouté au panier`);
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-slate-950 to-black border-b border-primary/20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-7xl font-display font-light mb-6">
              Unparalleled Design.
              <br />
              <span className="text-primary">Uncompromised Performance.</span>
            </h1>
            <p className="text-slate-300 text-lg font-outfit max-w-2xl mx-auto">
              Each piece in our collection represents the pinnacle of craftsmanship and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Product Image */}
                <div className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="aspect-square rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-slate-900/50 flex items-center justify-center overflow-hidden shadow-2xl">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/10 rounded-2xl blur-lg -z-10" />
                </div>

                {/* Product Details */}
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 1 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <p className="text-primary/70 text-sm uppercase tracking-widest font-outfit mb-2">{product.category}</p>
                      <h2 className="text-4xl font-display font-light mb-4">{product.title}</h2>
                      <p className="text-slate-300 text-lg font-outfit leading-relaxed">{product.desc}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {product.features.map((feature, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + j * 0.05 + 0.3 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-primary/70 flex-shrink-0" />
                          <span className="text-slate-300 font-outfit">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="pt-6 border-t border-primary/20 flex items-center justify-between">
                      <p className="text-2xl font-display font-light text-primary mb-4">{product.price}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-6 py-3 btn-primary font-display font-semibold rounded-full"
                        onClick={() => addToCart(product)}
                      >
                        Ajouter au panier
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-6 bg-slate-950/50 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-light mb-6">Trusted by Connoisseurs Worldwide</h2>
          <p className="text-slate-400 mb-8 font-outfit">"A revolution in essential luxury." — Tech & Design Magazine</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary/40 rounded-full text-primary hover:bg-primary/10 transition-all"
          >
            Learn Our Story
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

