import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const offers = [
  {
    title: "35% Off Hall Tickets!",
    description: "Book online & save big. Valid for all 3 parks. Limited period offer.",
    code: "WONDER35",
    bg: "from-wonder-pink to-wonder-orange",
    emoji: "🎟️",
  },
  {
    title: "Family Pack – ₹2999",
    description: "2 Adults + 2 Kids, includes lunch buffet. Weekdays only.",
    code: "FAMILY4",
    bg: "from-wonder-cyan to-wonder-green",
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    title: "Fastrack Pass – ₹499",
    description: "Skip all queues! Priority access to every ride in the park.",
    code: "FASTQ",
    bg: "from-secondary to-wonder-yellow",
    emoji: "⚡",
  },
  {
    title: "Student Special – 25% Off",
    description: "Flash your student ID and get 25% off on entry. Mon-Thu only.",
    code: "STUDENT25",
    bg: "from-primary to-wonder-cyan",
    emoji: "🎓",
  },
];

const OffersCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % offers.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + offers.length) % offers.length);
  const next = () => setCurrent((c) => (c + 1) % offers.length);

  return (
    <section id="offers" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary-foreground text-sm font-bold mb-4">
            🔥 Hot Deals
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground">
            Jaw-Dropping <span className="text-accent">Offers</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4 }}
              className={`relative rounded-3xl p-8 md:p-12 bg-gradient-to-br ${offers[current].bg} overflow-hidden`}
            >
              <Sparkles className="absolute top-6 right-6 w-8 h-8 opacity-30" style={{ color: "white" }} />
              <div className="relative z-10">
                <span className="text-5xl mb-4 block">{offers[current].emoji}</span>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "white" }}>
                  {offers[current].title}
                </h3>
                <p className="text-lg mb-6 max-w-lg" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {offers[current].description}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-card/30 font-mono font-bold text-sm" style={{ color: "white" }}>
                    Code: {offers[current].code}
                  </span>
                  <a href="#book" className="btn-cta text-sm !px-6 !py-2.5">
                    Grab This Deal
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-card transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-card transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {offers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-secondary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersCarousel;
