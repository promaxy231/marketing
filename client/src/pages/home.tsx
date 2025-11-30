import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import chronograph from "@assets/generated_images/premium_luxury_chronograph_watch.png";
import audio from "@assets/generated_images/luxury_wireless_audio_headphones.png";
import accessories from "@assets/generated_images/premium_essential_accessories_collection.png";
import { LuxuryBox } from "@/components/3d/LuxuryBox";
import { AnimatedGradientBackground } from "@/components/3d/AnimatedGradientBackground";
import { FloatingElements } from "@/components/animations/FloatingElements";
import { BackgroundParticles } from "@/components/3d/BackgroundParticles";

const galleryImages = [
  { src: chronograph, title: "Precision Timepieces", desc: "72-Hour Kinetic Reserve" },
  { src: audio, title: "Integrated Audio", desc: "Silent Mode Integration" },
  { src: accessories, title: "Essential Accessories", desc: "Lifetime Durability" }
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 }
  })
};

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
      <BackgroundParticles />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden">
        {/* 3D Animated Background */}
        <div className="absolute inset-0 -z-10">
          <AnimatedGradientBackground />
        </div>

        {/* Floating Elements */}
        <FloatingElements />

        {/* Background accent */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-700/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-amber-600/30 bg-amber-600/5 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </motion.div>
              <span className="text-sm font-outfit tracking-wide text-amber-300">CURATED EXCELLENCE</span>
            </motion.div>

            <div className="space-y-6 mb-6">
              {["The Convergence of", "Craftsmanship & Innovation"].map((line, i) => (
                <motion.h1
                  key={i}
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className={`${i === 0 ? "text-7xl md:text-8xl" : "text-7xl md:text-8xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent"} font-display font-light tracking-tight`}
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            <motion.p 
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xl text-slate-300 mb-12 font-outfit leading-relaxed max-w-2xl mx-auto"
            >
              Only the most discerning technology and meticulously sourced accessories.
              <br />
              Where precision engineering meets timeless design.
            </motion.p>

            <motion.a
              whileHover={{ scale: 1.08, boxShadow: "0 25px 50px rgba(217, 119, 6, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="/products"
              className="inline-flex px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-display font-semibold rounded-full transition-all items-center gap-3 mb-16 shadow-2xl"
            >
              Discover the Curated Essentials
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mt-20 group"
          >
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden border border-amber-600/30 bg-black shadow-2xl group-hover:shadow-amber-600/50 transition-all duration-500"
              style={{ 
                boxShadow: '0 0 60px rgba(217, 119, 6, 0.3), inset 0 0 60px rgba(217, 119, 6, 0.05)'
              }}
            >
              {/* Images */}
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: index === currentIndex ? 1 : 0, scale: index === currentIndex ? 1 : 1.15 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              ))}

              {/* Gallery Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="z-10"
                >
                  <p className="text-amber-400/90 text-sm uppercase tracking-widest font-outfit mb-2 font-semibold">✦ {galleryImages[currentIndex].title}</p>
                  <p className="text-white text-xl font-display font-light">{galleryImages[currentIndex].desc}</p>
                </motion.div>
              </div>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.15, backgroundColor: "rgba(217, 119, 6, 0.6)" }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-amber-600/30 hover:bg-amber-600/50 text-amber-300 transition-all backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.15, backgroundColor: "rgba(217, 119, 6, 0.6)" }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-amber-600/30 hover:bg-amber-600/50 text-amber-300 transition-all backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Dot Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {galleryImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`transition-all rounded-full ${
                      index === currentIndex
                        ? "bg-amber-400 w-8 h-3 shadow-lg shadow-amber-400/50"
                        : "bg-amber-600/40 hover:bg-amber-600/70 w-3 h-3"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/30 to-amber-500/20 rounded-2xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* The Signature Collection */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-slate-950/80 to-black border-t border-amber-600/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              The <span className="text-amber-300 font-semibold">Signature Collection</span>
            </h2>
            <p className="text-slate-400 text-lg font-outfit max-w-2xl mx-auto">
              Hand-selected pieces that transcend trends. Each item represents our uncompromising commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Timepieces",
                desc: "Engineered from polished titanium and aerospace-grade carbon fiber for a lifetime of precision.",
                feature: "72-Hour Kinetic Reserve",
                icon: "⌚"
              },
              {
                title: "Integrated Audio",
                desc: "Tuned by master acousticians for an immersive experience, wrapped in hand-stitched leather.",
                feature: "Silent Mode Integration",
                icon: "🎵"
              },
              {
                title: "Essential Accessories",
                desc: "Carefully curated to complement your sophisticated lifestyle and refined aesthetic.",
                feature: "Lifetime Durability Guarantee",
                icon: "✨"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -15, boxShadow: "0 30px 60px rgba(217, 119, 6, 0.2)" }}
                className="group p-8 rounded-xl border border-amber-600/30 bg-gradient-to-br from-amber-600/10 via-black to-slate-900/50 hover:border-amber-600/60 transition-all duration-500 cursor-pointer backdrop-blur-sm"
              >
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-display font-semibold mb-3 text-amber-300 group-hover:text-amber-200 transition-colors">{item.title}</h3>
                <p className="text-slate-300 mb-6 font-outfit text-sm leading-relaxed group-hover:text-slate-200 transition-colors">{item.desc}</p>
                <div className="pt-6 border-t border-amber-600/30 group-hover:border-amber-600/60 transition-colors">
                  <p className="text-xs text-amber-400/90 uppercase tracking-widest font-outfit font-semibold">✦ {item.feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-950 border-t border-amber-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
              Ready to elevate your essentials?
            </h2>
            <p className="text-slate-400 mb-10 font-outfit text-lg">Explore our complete collection of curated luxury items.</p>
            <motion.a
              whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(217, 119, 6, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-amber-600 hover:bg-amber-500 text-black font-display font-semibold rounded-full transition-all shadow-lg hover:shadow-amber-600/50"
            >
              Browse Collection
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
