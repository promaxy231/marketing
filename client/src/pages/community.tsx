import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MessageCircle, Heart, Users, TrendingUp } from "lucide-react";
import { WaveformVisualizer } from "@/components/3d/WaveformVisualizer";
import { FloatingBubbles } from "@/components/animations/FloatingBubbles";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const challenges = [
  { title: "Top Rated Reviews", members: 12500, progress: 65, emoji: "⭐" },
  { title: "Best Setup Photos", members: 8300, progress: 42, emoji: "📸" },
  { title: "Customer Showcase", members: 15200, progress: 78, emoji: "🛍️" },
];

const posts = [
  { author: "Sarah", avatar: "S", text: "The Chronograph Elite exceeded my expectations — flawless build and finish.", likes: 342, replies: 28 },
  { author: "James", avatar: "J", text: "Incredible sound from The Acoustics Master. Worth every penny.", likes: 1205, replies: 89 },
  { author: "Maya", avatar: "M", text: "Fast shipping and premium packaging. Highly recommend ESSENTIALS.", likes: 456, replies: 45 },
];

const leaders = [
  { name: "Alex", streak: 287, avatar: "A" },
  { name: "Jordan", streak: 245, avatar: "J" },
  { name: "Casey", streak: 198, avatar: "C" },
  { name: "Morgan", streak: 156, avatar: "M" },
];

export default function Community() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <FloatingBubbles count={5} />
        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-light mb-6">
              Connect <span className="text-gradient font-semibold">with ESSENTIALS</span>
            </h1>
            <p className="text-lg text-foreground/70">Join our community of discerning customers — share reviews, tips, and inspiration.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-b border-foreground/10">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Active Customers", value: "500K+", icon: Users },
              { label: "Reviews Today", value: "1.2K", icon: MessageCircle },
              { label: "Products Sold", value: "120K+", icon: Heart },
              { label: "Growth This Month", value: "+18%", icon: TrendingUp },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Waveform Visualizer */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="container max-w-6xl mx-auto">
          <div className="relative h-96 rounded-3xl card-premium overflow-hidden">
            <WaveformVisualizer />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent">
              <motion.div 
                className="text-center z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-display font-semibold text-white mb-3">Feel the Connection</h3>
                <p className="text-white/80 text-lg">Our community shares product reviews, setup tips, and curated experiences.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-6 relative">
        <div className="container max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-display font-semibold mb-8 text-gradient">Community Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-6"
              >
                <div className="text-5xl mb-4">{challenge.emoji}</div>
                <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{challenge.members.toLocaleString()} members</p>
                <div className="w-full bg-foreground/10 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${challenge.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 1 }}
                    className="bg-gradient-to-r from-primary to-secondary h-full"
                  />
                </div>
                <p className="text-xs text-foreground/60 mt-2">{challenge.progress}% complete</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-8">Top Contributors</h2>
          <div className="space-y-3">
            {leaders.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-4 flex items-center justify-between group hover:scale-102 transition-transform"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {leader.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{leader.name}</h3>
                      <p className="text-sm text-foreground/60">⭐ {leader.streak} community points</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">#{i + 1}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Feed */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-8">Customer Stories</h2>
          <div className="space-y-4">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-6"
              >
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{post.author}</h3>
                    <p className="text-sm text-foreground/60">Just now</p>
                  </div>
                </div>
                    <p className="text-foreground/80 mb-4">{post.text}</p>
                <div className="flex gap-6 pt-4 border-t border-foreground/10 text-sm text-foreground/60">
                  <button className="hover:text-primary transition-colors">{post.likes} Likes</button>
                  <button className="hover:text-primary transition-colors">{post.replies} Replies</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
