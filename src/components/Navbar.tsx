"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "@studio-freight/react-lenis";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Specialists", href: "#doctors" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 1.5 });
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-zinc-200 py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" onClick={(e) => handleNavClick(e, "body")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className={cn("font-serif font-bold text-2xl transition-colors", scrolled ? "text-blue-900" : "text-white")}>+</span>
          </div>
          <span className={cn("font-serif font-bold text-xl tracking-wider transition-colors", scrolled ? "text-zinc-900" : "text-white")}>
            POINTOFDEV
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn("text-xs font-semibold tracking-[0.2em] transition-colors uppercase relative group", scrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/80 hover:text-white")}
            >
              {link.name}
              <span className={cn("absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full", scrolled ? "bg-zinc-900" : "bg-white")}></span>
            </a>
          ))}
          <a
            href="/booking"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("px-6 py-2 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-300", 
              scrolled 
                ? "border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white" 
                : "border-white text-white hover:bg-white hover:text-black")}
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("md:hidden p-2", scrolled ? "text-zinc-900" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-zinc-200 absolute top-full left-0 right-0 overflow-hidden shadow-lg"
        >
          <div className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-2xl text-zinc-800 hover:text-blue-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all duration-300 text-center mt-4"
            >
              Book Appointment
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
