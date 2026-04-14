import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Parks", href: "#parks", children: ["Chennai", "Kochi", "Bengaluru"] },
  { label: "Rides", href: "#rides" },
  { label: "Offers", href: "#offers" },
  { label: "Experiences", href: "#experiences" },
  { label: "Plan Visit", href: "#plan" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`floating-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-3xl font-display font-extrabold text-secondary">
            Wonder<span className="text-accent">la</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </a>
              {link.children && activeDropdown === link.label && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-1 bg-card rounded-xl shadow-lg border p-2 min-w-[160px]"
                >
                  {link.children.map((child) => (
                    <a
                      key={child}
                      href="#parks"
                      className="block px-4 py-2 text-sm rounded-lg hover:bg-muted transition-colors"
                    >
                      {child}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#book" className="btn-cta text-sm !px-6 !py-2.5">
            🎢 Book Tickets
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-sm font-semibold hover:bg-muted transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#book" className="btn-cta text-sm mt-2 text-center">
                🎢 Book Tickets
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
