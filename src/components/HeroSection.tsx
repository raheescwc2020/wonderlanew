import { motion } from "framer-motion";
import heroPark from "@/assets/hero-park.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroPark}
          alt="Wonderla Amusement Park aerial view at sunset"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-bold mb-6 backdrop-blur-sm border border-secondary/30">
            🎉 India's Largest Amusement Park Chain
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
          style={{ color: "white" }}
        >
          Where Every Day
          <br />
          <span className="text-secondary">Is a Thrill!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          60+ jaw-dropping rides across 3 parks. Water slides, roller coasters,
          and memories that last forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#book" className="btn-cta text-lg">
            🎟️ Book Tickets Now
          </a>
          <a
            href="#rides"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg transition-all duration-300 border-2 border-secondary/40 backdrop-blur-sm hover:bg-secondary/10"
            style={{ color: "white" }}
          >
            Explore Rides →
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-8 md:gap-16 mt-16"
        >
          {[
            { num: "60+", label: "Rides" },
            { num: "3", label: "Parks" },
            { num: "15M+", label: "Happy Visitors" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-extrabold text-secondary">
                {stat.num}
              </div>
              <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-secondary/50 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-secondary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
