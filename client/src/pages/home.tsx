import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HolographicCard } from "@/components/ui/HolographicCard";
import { Product3D } from "@/components/ui/Product3D";
import { ArrowRight, Plus, Cpu, Wifi, Battery, Layers } from "lucide-react";

import bgImage from "@assets/generated_images/futuristic_deep_indigo_and_cyan_wireframe_background.png";
import smartwatchImg from "@assets/generated_images/sleek_futuristic_smartwatch_3d_render.png";
import earbudsImg from "@assets/generated_images/minimalist_wireless_earbuds_3d_render.png";
import speakerImg from "@assets/generated_images/transparent_smart_speaker_3d_render.png";
import phoneImg from "@assets/generated_images/futuristic_foldable_phone_3d_render.png";
import ringImg from "@assets/generated_images/futuristic_hexagonal_smart_ring_3d_render.png";
import glassesImg from "@assets/generated_images/futuristic_ar_smart_glasses_3d_render.png";

const gadgets = [
  { id: 1, name: "AEROBUDS PRO", price: "$199", image: earbudsImg, specs: "Noise Cancel · 48h Batt", modelType: "earbuds" as const },
  { id: 2, name: "SONIC PRISM", price: "$299", image: speakerImg, specs: "Hi-Res Audio · Holographic", modelType: "speaker" as const },
  { id: 3, name: "NEXUS FOLD", price: "$1299", image: phoneImg, specs: "8k Display · Neural Chip", modelType: "phone" as const },
  { id: 4, name: "HEXACORE RING", price: "$399", image: ringImg, specs: "Biometric · Always-On", modelType: "ring" as const },
  { id: 5, name: "PRISM VISION", price: "$899", image: glassesImg, specs: "AR Display · Neural Link", modelType: "glasses" as const },
];

export default function Home() {
  const [view3D, setView3D] = useState(true);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center perspective-1000">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full z-0"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full pt-20">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-tech tracking-wider text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              NEXT GEN RELEASE
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">CHRONO</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">VANTAGE</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-lg font-light leading-relaxed border-l-2 border-primary/50 pl-6">
              Experience the fusion of quantum computing and wrist-worn elegance. 
              The first holographic interface integrated into a titanium chassis.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-primary/10 border border-primary/50 text-primary font-tech font-bold tracking-widest overflow-hidden hover:bg-primary/20 transition-all rounded-sm">
                <span className="relative z-10 flex items-center gap-2">
                  EXPLORE 360° <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              
              <button className="px-8 py-4 text-gray-300 font-tech tracking-widest hover:text-white transition-colors">
                TECH SPECS
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              {[
                { label: "BATTERY", value: "7 Days", icon: Battery },
                { label: "NETWORK", value: "6G Ready", icon: Wifi },
                { label: "CHIP", value: "Q-Core", icon: Cpu },
              ].map((stat) => (
                <div key={stat.label}>
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <div className="text-2xl font-display font-bold">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-tech tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Product */}
          <div className="relative flex items-center justify-center">
            {/* UI Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="w-[400px] h-[400px] border border-primary/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
              <div className="w-[600px] h-[600px] border border-secondary/10 rounded-full opacity-50" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ y: y2 }}
              className="relative z-10"
            >
              <motion.img 
                src={smartwatchImg} 
                alt="Chrono Vantage Smartwatch" 
                className="w-full max-w-md mx-auto drop-shadow-[0_0_50px_rgba(0,255,255,0.2)]"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Floating UI Labels */}
              <motion.div 
                className="absolute top-10 right-0 bg-black/60 backdrop-blur-md border border-primary/30 p-3 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="text-xs text-primary font-tech mb-1">HEART RATE</div>
                <div className="text-xl font-display font-bold">72 BPM</div>
              </motion.div>

               <motion.div 
                className="absolute bottom-20 left-0 bg-black/60 backdrop-blur-md border border-secondary/30 p-3 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="text-xs text-secondary font-tech mb-1">STATUS</div>
                <div className="text-xl font-display font-bold">ONLINE</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-[10px] tracking-[0.2em]">SCROLL TO EXPLORE</div>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Product Grid Section */}
      <section className="py-32 relative bg-background mt-20">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">ECOSYSTEM</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setView3D(true)}
                className={`px-6 py-2 font-tech tracking-wider text-sm rounded-lg transition-all border ${
                  view3D 
                    ? "bg-primary/20 border-primary text-primary" 
                    : "bg-transparent border-white/20 text-gray-400 hover:border-white/40"
                }`}
              >
                <Layers className="w-4 h-4 inline mr-2" />
                3D MODELS
              </button>
              <button
                onClick={() => setView3D(false)}
                className={`px-6 py-2 font-tech tracking-wider text-sm rounded-lg transition-all border ${
                  !view3D 
                    ? "bg-primary/20 border-primary text-primary" 
                    : "bg-transparent border-white/20 text-gray-400 hover:border-white/40"
                }`}
              >
                RENDERS
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {gadgets.map((gadget, index) => (
              <HolographicCard key={gadget.id} delay={index * 0.2} className="group cursor-pointer flex flex-col h-full">
                <div className="relative flex-1 mb-6 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent rounded-lg overflow-hidden">
                  {view3D ? (
                    <Product3D type={gadget.modelType} color="#00ffff" />
                  ) : (
                    <motion.img 
                      src={gadget.image} 
                      alt={gadget.name}
                      className="w-3/4 object-contain transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ rotate: 5 }}
                    />
                  )}
                  
                  {/* Add Overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-black/80 backdrop-blur text-white p-3 rounded-full border border-primary/50">
                      <Plus className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-auto">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-display font-bold">{gadget.name}</h3>
                    <span className="text-primary font-tech text-xl">{gadget.price}</span>
                  </div>
                  <p className="text-sm text-gray-400 font-tech tracking-wide">{gadget.specs}</p>
                </div>
              </HolographicCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
