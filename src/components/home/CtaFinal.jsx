"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import AnimatedOrbs from "@/components/ui/AnimatedOrbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EMAIL, WHATSAPP_URL } from "@/lib/constants";

export default function CtaFinal() {
  return (
    <section
      id="contacto"
      className="py-24 bg-night relative overflow-hidden"
    >
      <AnimatedOrbs />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.12),transparent_70%)]" />

      <div className="container px-4 md:px-6 relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold text-white leading-tight">
            ¿Listo para que tu negocio trabaje de forma más{" "}
            <span className="gradient-text-animated">inteligente</span>?
          </h2>

          <p className="text-lg md:text-xl text-muted leading-relaxed">
            Reservá una consultoría gratuita de 30 minutos. Sin compromiso:
            salís con al menos una idea concreta para aplicar en tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-orange text-white font-semibold px-8 py-4 rounded-lg w-full sm:w-auto animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Reservar consultoría gratuita
            </motion.a>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-teal/50 text-white font-medium px-8 py-4 rounded-lg transition-colors w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Escribime por WhatsApp
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-muted text-sm mb-1">O escribime por email:</p>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-teal hover:text-teal/80 font-medium"
            >
              <Mail className="w-4 h-4" />
              {EMAIL}
            </a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
