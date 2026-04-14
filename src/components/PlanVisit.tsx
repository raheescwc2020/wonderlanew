import { motion } from "framer-motion";
import { Clock, MapPin, Map, Phone, Calendar, Shield } from "lucide-react";

const infoCards = [
  { icon: Clock, title: "Park Timings", info: "11:00 AM – 6:00 PM (Weekdays)\n11:00 AM – 7:00 PM (Weekends)", color: "bg-secondary/15 text-secondary-foreground" },
  { icon: MapPin, title: "How to Reach", info: "Located on Pallikarnai – Thoraipakkam Road, Chennai. 30 min from airport.", color: "bg-accent/15 text-accent" },
  { icon: Map, title: "Park Map", info: "Download the park map to plan your day and never miss your favorite rides.", color: "bg-wonder-cyan/15 text-wonder-cyan" },
  { icon: Phone, title: "Contact Us", info: "+91 80 6726 2626\nsupport@wonderla.com", color: "bg-wonder-green/15 text-wonder-green" },
  { icon: Calendar, title: "Best Time to Visit", info: "Weekdays for shortest queues. Oct-Feb for pleasant weather.", color: "bg-wonder-orange/15 text-wonder-orange" },
  { icon: Shield, title: "Safety First", info: "International safety standards. All rides inspected daily.", color: "bg-primary/15 text-primary" },
];

const PlanVisit = () => {
  return (
    <section id="plan" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary-foreground text-sm font-bold mb-4">
            🗺️ Thrill Seeker's Guide
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground">
            Plan Your <span className="text-accent">Visit</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-wonder bg-card p-6"
            >
              <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center mb-4`}>
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line">{card.info}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanVisit;
