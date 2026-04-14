import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Droplets, Baby, Star, Clock, Users } from "lucide-react";
import rideLand from "@/assets/ride-land.jpg";
import rideWater from "@/assets/ride-water.jpg";
import rideKids from "@/assets/ride-kids.jpg";

const categories = [
  { id: "land", label: "🎢 Land Rides", icon: Flame },
  { id: "water", label: "💦 Water Rides", icon: Droplets },
  { id: "kids", label: "🧸 Kids Zone", icon: Baby },
];

const rides: Record<string, Array<{
  name: string; thrill: string; duration: string; capacity: string; image: string; description: string;
}>> = {
  land: [
    { name: "Recoil", thrill: "Extreme", duration: "3 min", capacity: "24", image: rideLand, description: "India's first reverse looping roller coaster. Not for the faint-hearted!" },
    { name: "Flash Tower", thrill: "High", duration: "2 min", capacity: "16", image: rideLand, description: "A 185-foot free fall drop that'll leave you breathless." },
    { name: "Maverick", thrill: "Extreme", duration: "4 min", capacity: "20", image: rideLand, description: "Spin, twist, and loop through 360° inversions at insane speeds." },
    { name: "Wonder Splash", thrill: "Medium", duration: "5 min", capacity: "30", image: rideLand, description: "A family-friendly log flume ride with a spectacular splash finale." },
  ],
  water: [
    { name: "Boomerang", thrill: "Extreme", duration: "1 min", capacity: "4", image: rideWater, description: "A near-vertical water slide that sends you swinging like a pendulum." },
    { name: "Wave Pool", thrill: "Low", duration: "Open", capacity: "500+", image: rideWater, description: "India's biggest wave pool. Just float and feel the ocean vibe." },
    { name: "Tornado", thrill: "High", duration: "2 min", capacity: "4", image: rideWater, description: "A massive funnel slide that spins you into a whirlpool of fun." },
    { name: "Lazy River", thrill: "Low", duration: "Open", capacity: "200+", image: rideWater, description: "Grab a tube and float through a 500m tropical lazy river." },
  ],
  kids: [
    { name: "Mini Express", thrill: "Low", duration: "3 min", capacity: "12", image: rideKids, description: "A gentle train ride through a magical mini wonderland." },
    { name: "Carousel", thrill: "Low", duration: "3 min", capacity: "20", image: rideKids, description: "Classic merry-go-round with beautifully painted horses." },
    { name: "Dino Stomp", thrill: "Medium", duration: "4 min", capacity: "16", image: rideKids, description: "Adventure through a prehistoric world of animatronic dinosaurs." },
    { name: "Sky Flyer", thrill: "Low", duration: "2 min", capacity: "10", image: rideKids, description: "Gentle spinning ride that gives little ones a bird's eye view." },
  ],
};

const thrillColors: Record<string, string> = {
  Extreme: "bg-accent text-accent-foreground",
  High: "bg-wonder-orange/20 text-wonder-orange",
  Medium: "bg-secondary/20 text-secondary-foreground",
  Low: "bg-wonder-green/20 text-wonder-green",
};

const RideGrid = () => {
  const [active, setActive] = useState("land");
  const [selectedRide, setSelectedRide] = useState<string | null>(null);

  return (
    <section id="rides" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-bold mb-4">
            ⚡ The Rides
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground">
            Feel The <span className="text-secondary">Rush</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActive(cat.id); setSelectedRide(null); }}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                active === cat.id
                  ? "btn-cta"
                  : "bg-card text-foreground hover:bg-muted shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Ride Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {rides[active].map((ride, i) => (
              <motion.div
                key={ride.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-wonder bg-card cursor-pointer group"
                onClick={() => setSelectedRide(selectedRide === ride.name ? null : ride.name)}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={ride.image}
                    alt={ride.name}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: "var(--gradient-card)" }} />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${thrillColors[ride.thrill]}`}>
                      {ride.thrill}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="font-display text-lg font-bold" style={{ color: "white" }}>{ride.name}</h3>
                  </div>
                </div>

                <AnimatePresence>
                  {selectedRide === ride.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 border-t">
                        <p className="text-sm text-muted-foreground mb-3">{ride.description}</p>
                        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {ride.duration}</span>
                          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {ride.capacity}</span>
                          <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {ride.thrill}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {selectedRide !== ride.name && (
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {ride.duration}</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {ride.capacity}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RideGrid;
