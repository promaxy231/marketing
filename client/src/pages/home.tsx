import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { ArrowRight, Brain, Users, Zap, TrendingUp } from "lucide-react";

import appUI from "@assets/generated_images/zenflow_meditation_app_ui_mockup.png";
import meditationLife from "@assets/generated_images/girl_meditating_with_zenflow_app.png";
import dashboard from "@assets/generated_images/zenflow_community_dashboard.png";

const features = [
  { icon: Brain, label: "AI Personalized", desc: "Sessions tailored to you" },
  { icon: Users, label: "Million+ Community", desc: "Share your journey" },
  { icon: Zap, label: "Instant Calm", desc: "Results in 5 minutes" },
  { icon: TrendingUp, label: "Track Growth", desc: "Your wellness wins" },
];

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className="bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-background" />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,.1)_25%,rgba(0,255,255,.1)_50%,transparent_50%,transparent_75%,rgba(0,255,255,.1)_75%,rgba(0,255,255,.1))] bg-[50px_50px] animate-[slide_20s_linear_infinite]" />
        </div>

        <div className="container max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-primary font-outfit text-sm font-bold tracking-wider">✨ TRENDING NOW</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-space-grotesk font-bold leading-tight">
                Peace is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary text-glow">Trending</span>
              </h1>
              
              <p className="text-xl text-gray-300 font-outfit leading-relaxed max-w-lg">
                AI-powered meditation meets real community. Five minutes to calm. Lifetime of growth. Join millions of Gen Z finding their vibe.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <div className="text-3xl font-bold font-space-grotesk text-primary">5M+</div>
                <div className="text-xs text-gray-400 font-outfit mt-1">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-space-grotesk text-primary">99%</div>
                <div className="text-xs text-gray-400 font-outfit mt-1">Daily Return</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-space-grotesk text-primary">∞</div>
                <div className="text-xs text-gray-400 font-outfit mt-1">Free Sessions</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-6">
              <button className="group relative px-8 py-4 bg-primary text-black font-space-grotesk font-bold tracking-wider overflow-hidden rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all">
                <span className="relative z-10 flex items-center gap-2">
                  START BREATHING <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-outfit tracking-wider hover:border-primary/50 transition-colors rounded-lg">
                Learn More
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-gray-500 font-outfit">⭐⭐⭐⭐⭐ "Changed my mental health" - 500K+ reviews</p>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src={appUI} 
                alt="ZENFLOW App UI" 
                className="w-full rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-6 right-6 bg-black/80 backdrop-blur-xl border border-primary/50 p-4 rounded-lg z-20 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <div>
                  <div className="text-xs text-primary font-outfit font-bold">#1 WELLNESS</div>
                  <div className="text-lg font-space-grotesk font-bold">In Gen Z</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
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

      {/* Features Section */}
      <section className="py-24 relative bg-black/40 backdrop-blur">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">Why ZENFLOW Hits Different</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-space-grotesk font-bold mb-2">{feature.label}</h3>
                <p className="text-sm text-gray-400 font-outfit">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 relative">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">See the Difference</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-outfit">From stressed to blessed. Real stories from real users.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Find Your Flow", img: meditationLife, emoji: "🧘" },
              { title: "Grow Together", img: dashboard, emoji: "🌱" },
            ].map((section, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/50 transition-all"
              >
                <img 
                  src={section.img} 
                  alt={section.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <div className="text-4xl mb-2">{section.emoji}</div>
                    <h3 className="text-2xl font-space-grotesk font-bold">{section.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 border-y border-white/10">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold mb-6">Your Calm Awaits</h2>
            <p className="text-xl text-gray-300 font-outfit mb-8 max-w-2xl mx-auto">
              Join millions finding peace. No credit card. No pressure. Just breathe.
            </p>
            <button className="px-10 py-5 bg-primary text-black font-space-grotesk font-bold text-lg tracking-wider rounded-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] transition-all transform hover:scale-105">
              GET ZENFLOW FREE →
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
