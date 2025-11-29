import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Heart, Leaf, Moon, Sun, Smile } from "lucide-react";

import appUI from "@assets/generated_images/zenflow_meditation_app_ui_mockup.png";
import meditationLife from "@assets/generated_images/girl_meditating_with_zenflow_app.png";
import dashboard from "@assets/generated_images/zenflow_community_dashboard.png";

const sessions = [
  { emoji: "🌅", name: "Morning Clarity", duration: "5 min", desc: "Start your day centered" },
  { emoji: "🌊", name: "Midday Reset", duration: "10 min", desc: "Find your balance" },
  { emoji: "🌙", name: "Evening Peace", duration: "15 min", desc: "Rest your mind" },
  { emoji: "💫", name: "Deep Sleep", duration: "20 min", desc: "Drift into calm" },
];

const benefits = [
  { icon: Heart, label: "Reduce Anxiety", desc: "Find calm within minutes" },
  { icon: Moon, label: "Better Sleep", desc: "Drift peacefully" },
  { icon: Leaf, label: "Clear Mind", desc: "Quiet the noise" },
  { icon: Smile, label: "Daily Joy", desc: "Build lasting happiness" },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-secondary/5 to-background opacity-60" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-primary font-display text-sm font-semibold tracking-wide">Your moment of peace</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-display font-light leading-tight text-foreground">
                Breathe. <span className="font-semibold text-primary">Find.</span> Flow.
              </h1>
              
              <p className="text-lg text-foreground/70 font-outfit leading-relaxed max-w-lg">
                Meditation tailored to your moment. Whether you have 5 minutes or an hour, we're here to guide you to calm.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-outfit text-foreground/80">1,000+ guided sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-outfit text-foreground/80">AI learns what works for you</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-outfit text-foreground/80">Join 5 million people finding peace</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-8">
              <button className="px-8 py-4 bg-primary text-white font-outfit font-semibold rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all">
                Start Free
              </button>
              <button className="px-8 py-4 border-2 border-primary/30 text-foreground font-outfit font-semibold rounded-full hover:border-primary/60 transition-colors">
                Learn More
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-foreground/10">
              <p className="text-xs text-foreground/60 font-outfit">Recommended by therapists • Trusted by wellness experts</p>
            </div>
          </motion.div>

          {/* Hero Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Breathing Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div className="absolute w-80 h-80 rounded-full border-2 border-primary/20 breathe-ring" />
              <motion.div className="absolute w-96 h-96 rounded-full border border-secondary/10 breathe-ring" style={{ animationDelay: '0.5s' }} />
            </div>

            <div className="relative z-10">
              <img 
                src={appUI} 
                alt="ZENFLOW App" 
                className="w-full rounded-3xl shadow-lg border border-foreground/10"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-xs tracking-widest text-foreground/50">SCROLL</div>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-8 bg-primary/30" />
        </motion.div>
      </section>

      {/* Quick Sessions */}
      <section className="py-24 px-6 relative">
        <div className="container max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              Pick your <span className="font-semibold text-primary">moment</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Meditation that fits your life, not the other way around</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessions.map((session, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-soft group cursor-pointer hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="text-5xl mb-4">{session.emoji}</div>
                <h3 className="text-lg font-display font-semibold mb-1 text-foreground">{session.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{session.duration}</p>
                <p className="text-sm text-foreground/70">{session.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="container max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              Feel the <span className="font-semibold text-primary">difference</span>
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
                className="card-soft text-center p-8"
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.label}</h3>
                <p className="text-sm text-foreground/70">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-24 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              Real stories, <span className="font-semibold text-primary">real calm</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Find Your Flow", img: meditationLife, story: "Meditation that meets you where you are" },
              { title: "Grow Together", img: dashboard, story: "Connect with a community that understands" },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-foreground/10 card-soft overflow-hidden cursor-pointer"
              >
                <img 
                  src={section.img} 
                  alt={section.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-white mb-1">{section.title}</h3>
                    <p className="text-white/80 text-sm">{section.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border-t border-foreground/10">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-light mb-6">
              Your calm <span className="font-semibold text-primary">awaits</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              No credit card needed. Start free. 5 minutes could change everything.
            </p>
            <button className="px-10 py-5 bg-primary text-white font-outfit font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all text-lg">
              Begin Your Journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
