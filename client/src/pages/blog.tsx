import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FloatingBubbles } from "@/components/animations/FloatingBubbles";

const articles = [
  {
    title: "Inside The Chronograph Elite",
    excerpt: "An in-depth look at the engineering and materials that define our flagship timepiece.",
    date: "Nov 28, 2024",
    author: "Design Team",
    category: "Product",
    readTime: "8 min",
    emoji: "⌚"
  },
  {
    title: "Optimizing Your Audio Setup",
    excerpt: "How to get studio-quality sound from The Acoustics Master in any room.",
    date: "Nov 25, 2024",
    author: "Audio Lab",
    category: "Guides",
    readTime: "6 min",
    emoji: "🎧"
  },
  {
    title: "Choosing the Right Essentials for Travel",
    excerpt: "A buyer's guide to selecting premium accessories that travel well.",
    date: "Nov 22, 2024",
    author: "Maria Garcia",
    category: "Lifestyle",
    readTime: "7 min",
    emoji: "💼"
  },
  {
    title: "Materials & Finishes: What Matters",
    excerpt: "Why material selection matters for longevity and luxury — a materials deep dive.",
    date: "Nov 19, 2024",
    author: "Workshop",
    category: "Craftsmanship",
    readTime: "10 min",
    emoji: "🔧"
  },
  {
    title: "Customer Stories: Signature Experiences",
    excerpt: "Real testimonials from customers who chose ESSENTIALS for performance and craft.",
    date: "Nov 13, 2024",
    author: "Community Team",
    category: "Community",
    readTime: "12 min",
    emoji: "🛍️"
  }
];

  const categories = ["All", "Product", "Guides", "Lifestyle", "Craftsmanship", "Community"];

export default function Blog() {
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
              Insights <span className="text-gradient font-semibold">& Guides</span>
            </h1>
            <p className="text-lg text-foreground/70">Explore product deep dives, setup guides, and stories from ESSENTIALS customers.</p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6 border-b border-foreground/10">
        <div className="container max-w-6xl mx-auto">
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`px-4 py-2 rounded-full transition-all ${
                  i === 0 
                    ? "bg-primary text-white" 
                    : "bg-primary/10 text-foreground hover:bg-primary/20"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium p-8 md:p-12 cursor-pointer hover:scale-102 transition-transform"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-4">{articles[0].emoji}</div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {articles[0].category}
                </div>
                <h2 className="text-4xl font-bold mb-4">{articles[0].title}</h2>
                <p className="text-lg text-foreground/70 mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center gap-4 mb-6 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {articles[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {articles[0].author}
                  </div>
                  <div>{articles[0].readTime}</div>
                </div>
                <button className="inline-flex items-center gap-2 btn-primary group">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-premium p-6 group cursor-pointer hover:scale-105 transition-transform flex flex-col"
              >
                <div className="text-5xl mb-4">{article.emoji}</div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 w-fit">
                  {article.category}
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                <p className="text-sm text-foreground/70 mb-4 flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-foreground/10 text-xs text-foreground/60">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-light mb-4">
              Get updates <span className="text-gradient font-semibold">delivered</span>
            </h2>
            <p className="text-foreground/70 mb-6">Subscribe to receive product launches, early access and exclusive offers.</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 px-4 py-3 rounded-full border border-foreground/20 bg-white/50 placeholder-foreground/50 focus:outline-none focus:border-primary"
              />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
