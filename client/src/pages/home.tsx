import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import chronograph from "@assets/generated_images/premium_luxury_chronograph_watch.png";
import audio from "@assets/generated_images/luxury_wireless_audio_headphones.png";
import accessories from "@assets/generated_images/premium_essential_accessories_collection.png";

const galleryImages = [
  { src: chronograph, title: "Precision Timepieces", desc: "72-Hour Kinetic Reserve" },
  { src: audio, title: "Integrated Audio", desc: "Silent Mode Integration" },
  { src: accessories, title: "Essential Accessories", desc: "Lifetime Durability" }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-black">
        {/* Background accent */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-amber-600/30 bg-amber-600/5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-outfit tracking-wide text-amber-300">CURATED EXCELLENCE</span>
            </div>

            <h1 className="text-7xl md:text-8xl font-display font-light mb-6 tracking-tight">
              The Convergence of
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Craftsmanship & Innovation
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 font-outfit leading-relaxed max-w-2xl mx-auto">
              Only the most discerning technology and meticulously sourced accessories.
              Where precision engineering meets timeless design.
            </p>

            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(217, 119, 6, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              href="/products"
              className="inline-flex px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-display font-semibold rounded-full transition-all items-center gap-3 mb-16"
            >
              Discover the Curated Essentials
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mt-20"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-amber-600/20 bg-black shadow-2xl">
              {/* Images */}
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentIndex ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}

              {/* Gallery Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="z-10"
                >
                  <p className="text-amber-400/80 text-sm uppercase tracking-widest font-outfit mb-2">{galleryImages[currentIndex].title}</p>
                  <p className="text-white text-lg font-display">{galleryImages[currentIndex].desc}</p>
                </motion.div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-amber-600/20 hover:bg-amber-600/40 text-amber-300 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-amber-600/20 hover:bg-amber-600/40 text-amber-300 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all rounded-full ${
                      index === currentIndex
                        ? "bg-amber-400 w-8 h-2"
                        : "bg-amber-600/40 hover:bg-amber-600/60 w-2 h-2"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-amber-500/10 rounded-2xl blur-xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* The Signature Collection */}
      <section className="py-24 px-6 bg-slate-950/50 border-t border-amber-600/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              The <span className="text-amber-300">Signature Collection</span>
            </h2>
            <p className="text-slate-300 text-lg font-outfit max-w-2xl mx-auto">
              Hand-selected pieces that transcend trends. Each item represents our uncompromising commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Timepieces",
                desc: "Engineered from polished titanium and aerospace-grade carbon fiber for a lifetime of precision.",
                feature: "72-Hour Kinetic Reserve"
              },
              {
                title: "Integrated Audio",
                desc: "Tuned by master acousticians for an immersive experience, wrapped in hand-stitched leather.",
                feature: "Silent Mode Integration"
              },
              {
                title: "Essential Accessories",
                desc: "Carefully curated to complement your sophisticated lifestyle and refined aesthetic.",
                feature: "Lifetime Durability Guarantee"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-xl border border-amber-600/20 bg-gradient-to-b from-amber-600/5 to-transparent hover:border-amber-600/40 transition-all cursor-pointer"
              >
                <h3 className="text-2xl font-display font-semibold mb-3 text-amber-300">{item.title}</h3>
                <p className="text-slate-300 mb-4 font-outfit text-sm leading-relaxed">{item.desc}</p>
                <div className="pt-4 border-t border-amber-600/20">
                  <p className="text-xs text-amber-400/80 uppercase tracking-widest font-outfit">✓ {item.feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-black border-t border-amber-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-light mb-6">
            Ready to elevate your essentials?
          </h2>
          <p className="text-slate-400 mb-8 font-outfit">Explore our complete collection of curated luxury items.</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-amber-600 hover:bg-amber-500 text-black font-display font-semibold rounded-full transition-all"
          >
            Browse Collection
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
