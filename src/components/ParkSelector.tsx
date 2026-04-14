import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import parkChennai from "@/assets/park-chennai.jpg";
import parkKochi from "@/assets/park-kochi.jpg";
import parkBengaluru from "@/assets/park-bengaluru.jpg";

const parks = [
  {
    name: "Chennai",
    tagline: "Ride the Wave!",
    rides: 55,
    image: parkChennai,
    color: "from-wonder-pink to-wonder-orange",
  },
  {
    name: "Kochi",
    tagline: "Tropical Thrills Await",
    rides: 52,
    image: parkKochi,
    color: "from-wonder-cyan to-wonder-green",
  },
  {
    name: "Bengaluru",
    tagline: "The Original Wonderland",
    rides: 60,
    image: parkBengaluru,
    color: "from-secondary to-wonder-orange",
  },
];

const ParkSelector = () => {
  return (
    <section id="parks" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary-foreground text-sm font-bold mb-4">
            📍 Choose Your Park
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground">
            Three Parks, <span className="text-accent">Endless Fun</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {parks.map((park, i) => (
            <motion.div
              key={park.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-wonder group cursor-pointer bg-card"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={park.image}
                  alt={`Wonderla ${park.name} park`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${park.color} opacity-40`} />
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs font-bold text-foreground">{park.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  Wonderla {park.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{park.tagline}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-secondary-foreground bg-secondary/15 px-3 py-1 rounded-full">
                    {park.rides}+ Rides
                  </span>
                  <span className="flex items-center gap-1 text-sm font-bold text-accent group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParkSelector;
