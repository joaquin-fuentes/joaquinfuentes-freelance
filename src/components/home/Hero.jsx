"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ChevronDown, Globe, Workflow } from "lucide-react";
import AnimatedOrbs from "@/components/ui/AnimatedOrbs";

const pillars = [
  {
    icon: Globe,
    title: "Sitio web",
    desc: "Presencia online que convierte",
    color: "teal",
    delay: 0,
    offset: "",
  },
  {
    icon: Workflow,
    title: "Automatización",
    desc: "Tareas que se hacen solas",
    color: "orange",
    delay: 0.15,
    offset: "md:ml-8",
  },
  {
    icon: BarChart3,
    title: "Datos",
    desc: "Decisiones con información real",
    color: "teal",
    delay: 0.3,
    offset: "",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-night pt-16">
      <AnimatedOrbs />

      <div className="container px-4 md:px-6 relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-medium tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              Desarrollo Web · Automatización · Datos para Pymes
            </motion.span>

            <motion.h1
              variants={item}
              className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
            >
              Tu negocio puede vender más y trabajar menos.{" "}
              <span className="gradient-text-animated">Te muestro cómo.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted leading-relaxed max-w-xl"
            >
              Soy Joaquín Fuentes, desarrollador full stack. Diseño sitios web
              que convierten, automatizo tareas repetitivas y te ayudo a
              entender los números de tu negocio — todo en un mismo lugar, con
              un solo interlocutor.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contacto"
                className="inline-flex items-center justify-center bg-orange text-white font-semibold px-7 py-3.5 rounded-lg animate-pulse-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Quiero una consultoría gratuita
              </motion.a>
              <motion.a
                href="#proceso"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-teal/50 text-white font-medium px-7 py-3.5 rounded-lg transition-colors"
                whileHover={{ scale: 1.03, borderColor: "rgba(45,212,191,0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                Ver cómo trabajo
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="grid gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const floatClass =
                i === 0
                  ? "animate-float"
                  : i === 1
                    ? "animate-float-delayed"
                    : "animate-float-slow";

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + pillar.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(45,212,191,0.4)",
                  }}
                  className={`flex items-center gap-4 glass-card rounded-xl p-5 ${pillar.offset} ${floatClass} glow-teal`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                      pillar.color === "teal"
                        ? "bg-teal/20 text-teal"
                        : "bg-orange/20 text-orange"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{pillar.title}</p>
                    <p className="text-muted text-sm">{pillar.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <motion.a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-teal transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
