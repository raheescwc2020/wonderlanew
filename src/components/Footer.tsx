import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="text-3xl font-display font-extrabold text-secondary">
              Wonder<span className="text-accent">la</span>
            </span>
            <p className="mt-3 text-sm text-primary-foreground/70">
              India's largest chain of amusement parks. Creating memories since 2000.
            </p>
          </div>
          {[
            { title: "Parks", links: ["Bengaluru", "Kochi", "Chennai", "Hyderabad (Coming Soon)"] },
            { title: "Quick Links", links: ["Book Tickets", "Group Bookings", "Annual Pass", "Gift Cards"] },
            { title: "Support", links: ["FAQs", "Contact Us", "Safety Policy", "Careers"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-primary-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Wonderla Holidays Ltd. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> for thrill seekers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
