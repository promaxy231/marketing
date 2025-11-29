import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Play, Clock, Zap, Users } from "lucide-react";
import { MeditationSphere } from "@/components/3d/MeditationSphere";
import { FloatingBubbles } from "@/components/animations/FloatingBubbles";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const categories = [
  { name: "Sleep", icon: "🌙", sessions: 45, color: "from-indigo-400 to-purple-400" },
  { name: "Anxiety", icon: "🧘", sessions: 38, color: "from-blue-400 to-cyan-400" },
  { name: "Focus", icon: "🎯", sessions: 32, color: "from-yellow-400 to-orange-400" },
  { name: "Energy", icon: "⚡", sessions: 28, color: "from-pink-400 to-red-400" },
  { name: "Gratitude", icon: "🙏", sessions: 25, color: "from-green-400 to-teal-400" },
  { name: "Confidence", icon: "💪", sessions: 22, color: "from-purple-400 to-pink-400" },
];

const featured = [
  { title: "5-Minute Morning Clarity", duration: "5 min", difficulty: "Beginner", rating: 4.9 },
  { title: "Deep Sleep Journey", duration: "20 min", difficulty: "Intermediate", rating: 4.8 },
  { title: "Calm Your Mind", duration: "10 min", difficulty: "Beginner", rating: 4.9 },
];

export default function Meditate() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <FloatingBubbles count={4} />
        <div className="container max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-light mb-6">
              Start <span className="text-gradient font-semibold">meditating</span> today
            </h1>
            <p className="text-lg text-foreground/70">Thousands of guided sessions to calm your mind, reduce stress, and find inner peace</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Sessions */}
      <section className="py-16 px-6 relative">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-8 text-gradient">Featured Sessions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((session, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <motion.div
                  className="card-premium p-6 group cursor-pointer hover:scale-105 transition-transform duration-300 pulse-glow"
                  whileHover={{ y: -5 }}
                >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{session.title}</h3>
                    <p className="text-sm text-foreground/70">{session.difficulty}</p>
                  </div>
                  <button className="ml-4 w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Play className="w-5 h-5 text-primary" />
                  </button>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-foreground/10">
                  <span className="text-sm text-foreground/60">{session.duration}</span>
                  <span className="text-primary">⭐ {session.rating}</span>
                </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 relative overflow-hidden">
        <FloatingBubbles count={3} />
        <div className="container max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-display font-semibold mb-8 text-gradient">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <ScrollReveal key={i} delay={i * 0.05} direction="up">
                <motion.div
                  className="card-premium p-6 group cursor-pointer hover:scale-105 transition-transform pulse-glow"
                  whileHover={{ rotate: 2, y: -5 }}
                >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cat.color} p-4 mb-4 flex items-center justify-center text-3xl`}>
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{cat.name}</h3>
                <p className="text-sm text-foreground/70">{cat.sessions} Sessions</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
        <FloatingBubbles count={2} />
        <div className="container max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-light mb-6">
              Ready to begin? <span className="text-gradient font-semibold">Start free today</span>
            </h2>
            <button className="btn-primary">
              Explore All Sessions
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
