import { useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag, Star } from "lucide-react";

const tabs = [
  {
    id: "food",
    label: "🍛 Desi Delights",
    icon: UtensilsCrossed,
    items: [
      { name: "Spice Route", desc: "Authentic South Indian thalis & biryanis", price: "₹349", rating: 4.8 },
      { name: "Chaat Corner", desc: "Pani puri, bhel, and all your street food favorites", price: "₹149", rating: 4.6 },
      { name: "Ice Cream Parlour", desc: "30+ flavors of handmade ice cream", price: "₹99", rating: 4.9 },
      { name: "Pizza & Pasta Hub", desc: "Wood-fired pizzas and fresh pasta bowls", price: "₹299", rating: 4.5 },
    ],
  },
  {
    id: "merch",
    label: "🛍️ Wonderla Merch",
    icon: ShoppingBag,
    items: [
      { name: "Wonderla T-Shirt", desc: "Premium cotton with exclusive ride artwork", price: "₹599", rating: 4.7 },
      { name: "Plush Mascot", desc: "Take home the adorable Wonderla mascot", price: "₹449", rating: 4.9 },
      { name: "Photo Package", desc: "All your ride photos + digital download", price: "₹399", rating: 4.4 },
      { name: "Cap & Sunglasses", desc: "Beat the sun in style", price: "₹299", rating: 4.3 },
    ],
  },
];

const ExperienceTabs = () => {
  const [active, setActive] = useState("food");
  const currentTab = tabs.find((t) => t.id === active)!;

  return (
    <section id="experiences" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-bold mb-4">
            ✨ Beyond Rides
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground">
            Complete <span className="text-secondary">Experience</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                active === tab.id
                  ? "btn-cta"
                  : "bg-card text-foreground hover:bg-muted shadow-sm"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {currentTab.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-wonder bg-card p-6 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg font-bold text-foreground">{item.name}</h3>
                <span className="flex items-center gap-1 text-xs font-bold text-secondary-foreground">
                  <Star className="w-3 h-3 fill-secondary text-secondary" /> {item.rating}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-lg text-foreground">{item.price}</span>
                <span className="text-xs font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  View →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTabs;
