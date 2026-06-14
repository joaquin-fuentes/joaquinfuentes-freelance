"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
  {
    pregunta: "¿Trabajás con cualquier tipo de negocio?",
    respuesta:
      "Principalmente con pequeños negocios y profesionales independientes que quieren digitalizarse u optimizar lo que ya tienen.",
  },
  {
    pregunta: "¿Cuánto cuesta un proyecto?",
    respuesta:
      "Depende del alcance. Por eso arrancamos con una consultoría gratuita: ahí te doy un presupuesto concreto, sin sorpresas.",
  },
  {
    pregunta: "¿Cuánto tarda?",
    respuesta:
      "Proyectos chicos (landing, automatización puntual) pueden estar listos en 1-2 semanas. Proyectos más grandes se dividen en etapas con entregas parciales.",
  },
  {
    pregunta: "¿Qué pasa después de la entrega?",
    respuesta:
      "Te dejo todo documentado y ofrezco soporte/ajustes posteriores. El alcance y costo de ese acompañamiento se define según lo que necesites.",
  },
  {
    pregunta: "¿Tengo que entender de tecnología para trabajar con vos?",
    respuesta:
      "No. Mi trabajo es traducir lo técnico a decisiones simples para tu negocio.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-night relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.06),transparent_50%)]" />

      <div className="container px-4 md:px-6 relative">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white mb-4">
            Preguntas frecuentes
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal to-orange mx-auto rounded-full" />
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.08} y={20}>
                <motion.div
                  className={`glass-card rounded-xl overflow-hidden transition-colors ${
                    isOpen ? "border-teal/30 glow-teal" : ""
                  }`}
                  layout
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-white font-medium text-sm md:text-base">
                      {faq.pregunta}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-teal shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-muted text-sm leading-relaxed">
                          {faq.respuesta}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
