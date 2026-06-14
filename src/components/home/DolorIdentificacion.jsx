"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const problemas = [
  "Tu página web no genera clientes, o todavía no tenés una.",
  "Perdés horas haciendo a mano tareas que se podrían automatizar (presupuestos, mails, planillas, seguimiento de clientes).",
  "Tenés datos de ventas y clientes, pero no sabés cómo usarlos para decidir.",
  "Contrataste sistemas genéricos que no se adaptan a cómo trabaja realmente tu negocio.",
  "Una agencia grande te cotiza carísimo y tarda meses en responder.",
];

export default function DolorIdentificacion() {
  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 md:px-6 relative">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-ink mb-4">
            ¿Te suena familiar?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal to-orange mx-auto rounded-full" />
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {problemas.map((problema, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="flex gap-3 bg-white border border-slate-200 rounded-xl p-5 shadow-sm h-full"
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                  borderColor: "rgba(249,115,22,0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <AlertCircle className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                <p className="text-ink text-sm leading-relaxed">{problema}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="text-center mt-10" delay={0.3}>
          <p className="text-subtle font-medium">
            Si te identificaste con al menos uno,{" "}
            <span className="text-ink font-semibold">sigamos leyendo.</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
