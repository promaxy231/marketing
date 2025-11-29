import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Heart, Leaf, Moon, Smile, ChevronRight, CheckCircle2 } from "lucide-react";
import { ParticleBackground } from "@/components/3d/ParticleBackground";
import { MeditationSphere } from "@/components/3d/MeditationSphere";

import appUI from "@assets/generated_images/zenflow_meditation_app_ui_mockup.png";
import meditationLife from "@assets/generated_images/girl_meditating_with_zenflow_app.png";
import trackerUI from "@assets/generated_images/wellness_progress_tracker_ui.png";

const sessions = [
  { emoji: "🌅", name: "Morning Clarity", duration: "5 min", desc: "Start your day centered", delay: 0 },
  { emoji: "🌊", name: "Midday Reset", duration: "10 min", desc: "Find your balance", delay: 0.1 },
  { emoji: "🌙", name: "Evening Peace", duration: "15 min", desc: "Rest your mind", delay: 0.2 },
  { emoji: "💫", name: "Deep Sleep", duration: "20 min", desc: "Drift into calm", delay: 0.3 },
];

const benefits = [
  { icon: Heart, label: "Reduce Anxiety", desc: "Find calm within minutes", color: "from-red-400 to-pink-400" },
  { icon: Moon, label: "Better Sleep", desc: "Drift peacefully", color: "from-indigo-400 to-purple-400" },
  { icon: Leaf, label: "Clear Mind", desc: "Quiet the noise", color: "from-green-400 to-teal-400" },
  { icon: Smile, label: "Daily Joy", desc: "Build lasting happiness", color: "from-yellow-400 to-orange-400" },
];

const testimonials = [
  { name: "Sarah", quote: "Changed my anxiety levels in just 2 weeks", rating: 5 },
  { name: "James", quote: "Finally sleeping through the night consistently", rating: 5 },
  { name: "Maya", quote: "The community support is everything to me", rating: 5 },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/15 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

        <div className="container max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-sm font-semibold text-primary tracking-widest">✨ YOUR MOMENT OF PEACE</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl font-display font-light leading-tight text-foreground">
                Breathe.<br/><span className="font-semibold text-gradient">Find.</span> Flow.
              </h1>
              
              <p className="text-lg text-foreground/70 font-outfit leading-relaxed max-w-lg">
                Personalized meditation sessions tailored to your needs. Whether it's 5 minutes of clarity or 20 minutes of deep calm—we're here to guide you.
              </p>
            </div>

            {/* Highlights with icons */}
            <div className="space-y-4 pt-4">
              {[
                "1,000+ guided sessions curated by experts",
                "AI learns what works best for your mind",
                "Join 5M+ people on their wellness journey"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-outfit text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-8"
            >
              <button className="btn-primary flex items-center gap-2 group">
                Start Free Today
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                See How It Works
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-6 border-t border-foreground/10 flex gap-6"
            >
              <div>
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <p className="text-xs text-foreground/60">App Store Rating</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500K+</div>
                <p className="text-xs text-foreground/60">5-Star Reviews</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Breathing circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div className="absolute w-80 h-80 rounded-full border-2 border-primary/20 breathe-ring" />
              <motion.div className="absolute w-96 h-96 rounded-full border border-secondary/10 breathe-ring" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Phone mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative z-10"
            >
              <div className="card-premium overflow-hidden">
                <img 
                  src={appUI} 
                  alt="ZENFLOW App" 
                  className="w-full shimmer"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="text-xs tracking-widest text-foreground/50 uppercase">Scroll</div>
        </motion.div>
      </section>

      {/* Quick Sessions */}
      <section className="py-32 px-6 relative">
        <div className="container max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              Pick your <span className="text-gradient font-semibold">perfect moment</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Sessions tailored to fit your life, not the other way around</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessions.map((session, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: session.delay }}
                className="card-premium group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6 space-y-4">
                  <div className="text-6xl">{session.emoji}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">{session.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-2">{session.duration}</p>
                    <p className="text-sm text-foreground/70">{session.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 relative bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent">
        <div className="container max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              Feel the <span className="text-gradient font-semibold">difference</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-8 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-r ${benefit.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.label}</h3>
                <p className="text-sm text-foreground/70">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-32 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              Real stories, <span className="text-gradient font-semibold">real impact</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { title: "Find Your Flow", img: meditationLife, story: "Meditation that meets you where you are" },
              { title: "Track Your Growth", img: trackerUI, story: "Celebrate every milestone in your journey" },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium group cursor-pointer overflow-hidden"
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={section.img} 
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">{section.title}</h3>
                      <p className="text-white/80 text-sm">{section.story}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-primary">⭐</span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-foreground">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-50" />
        
        <div className="container max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-display font-light">
              Your calm <span className="text-gradient font-semibold">awaits</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              No credit card. No pressure. Just take a deep breath and begin your journey today.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              Begin Your Journey Free
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
