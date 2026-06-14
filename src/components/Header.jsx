"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-night/95 backdrop-blur-lg border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link
            href="#"
            className="flex items-center gap-2.5 font-[family-name:var(--font-space-grotesk)] font-bold text-white text-lg tracking-tight group"
          >
            <Logo
              size={34}
              className="shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            Joaquín Fuentes
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-teal transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all group-hover:w-full" />
              </a>
            ))}
            <motion.a
              href="#contacto"
              className="inline-flex items-center justify-center bg-orange hover:bg-orange/90 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Hablemos
            </motion.a>
          </nav>

          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              className="md:hidden pb-4 flex flex-col gap-3 border-t border-white/10 pt-4 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted hover:text-teal transition-colors py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-orange text-white font-semibold px-5 py-2.5 rounded-lg mt-2"
                onClick={() => setOpen(false)}
              >
                Hablemos
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
