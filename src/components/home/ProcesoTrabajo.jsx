"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, Layers, Rocket } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const pasos = [
  {
    numero: "01",
    icono: ClipboardList,
    titulo: "Diagnóstico gratuito (30 min)",
    descripcion:
      "Hablamos de tu negocio, identificamos qué te está frenando y dónde hay oportunidades rápidas.",
  },
  {
    numero: "02",
    icono: FileText,
    titulo: "Propuesta clara",
    descripcion:
      "Te armo un plan concreto — qué se hace, cuánto tarda, cuánto cuesta. Sin letra chica.",
  },
  {
    numero: "03",
    icono: Layers,
    titulo: "Desarrollo por etapas",
    descripcion:
      "Trabajo en entregas cortas para que veas avances reales y puedas dar feedback en el camino.",
  },
  {
    numero: "04",
    icono: Rocket,
    titulo: "Entrega + acompañamiento",
    descripcion:
      "Te dejo todo funcionando y documentado, y te acompaño en los primeros pasos después de la entrega.",
  },
];

export default function ProcesoTrabajo() {
  return (
    <section id="proceso" className="py-20 bg-surface relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 md:px-6 relative">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-ink mb-4">
            Cómo trabajamos juntos
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal to-orange mx-auto rounded-full" />
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal via-orange to-teal" />

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasos.map((paso, i) => {
              const Icon = paso.icono;
              return (
                <StaggerItem key={i}>
                  <motion.div
                    className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full"
                    whileHover={{
                      y: -6,
                      boxShadow: "0 16px 48px rgba(45,212,191,0.12)",
                    }}
                  >
                    <motion.span
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal text-white text-sm font-bold mb-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.2 + i * 0.1,
                      }}
                    >
                      {paso.numero}
                    </motion.span>
                    <div className="w-10 h-10 mb-4 rounded-lg bg-teal/10 flex items-center justify-center text-teal">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-ink font-semibold text-lg mb-2">
                      {paso.titulo}
                    </h3>
                    <p className="text-subtle text-sm leading-relaxed">
                      {paso.descripcion}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
