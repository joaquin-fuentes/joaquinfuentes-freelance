"use client";

import { motion } from "framer-motion";
import { BarChart3, Bot, Globe, Workflow } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const servicios = [
  {
    icon: Globe,
    title: "Sitios y aplicaciones web a medida",
    description:
      "Páginas y plataformas rápidas, responsivas y pensadas para convertir visitas en clientes. Desde landing pages hasta sistemas web completos.",
    ideal:
      "Negocios sin presencia online o con una web desactualizada que no genera resultados.",
    cta: "Ver proyectos",
    href: "#proyectos",
    accent: "teal",
  },
  {
    icon: Workflow,
    title: "Automatizá las tareas repetitivas",
    description:
      "Conecto tus herramientas (WhatsApp, mail, planillas, redes sociales, sistemas de gestión) para que las tareas manuales se hagan solas. Menos errores, más tiempo libre.",
    ideal: "Negocios que pierden horas por semana en tareas administrativas.",
    cta: "Quiero automatizar mi negocio",
    href: "#contacto",
    accent: "orange",
  },
  {
    icon: BarChart3,
    title: "Entendé los números de tu negocio",
    description:
      "Convierto tus datos de ventas, clientes y operaciones en reportes y dashboards claros, para que tomes decisiones con información real, no a ojo.",
    ideal: "Negocios que quieren saber qué les funciona, qué no, y por qué.",
    cta: "Quiero ver mis datos claros",
    href: "#contacto",
    accent: "teal",
  },
  {
    icon: Bot,
    title: "Sistemas a medida y asistentes con IA",
    description:
      "Gestores de stock, CRMs simples, asistentes con inteligencia artificial para atención al cliente y más — herramientas hechas para tu forma de trabajar, no al revés.",
    ideal:
      "Negocios con necesidades puntuales que ningún software genérico resuelve bien.",
    cta: "Contame tu caso",
    href: "#contacto",
    accent: "orange",
  },
];

const accentStyles = {
  teal: {
    icon: "bg-teal/15 text-teal",
    link: "text-teal hover:text-teal/80",
    glow: "hover:glow-teal",
  },
  orange: {
    icon: "bg-orange/15 text-orange",
    link: "text-orange hover:text-orange/80",
    glow: "hover:glow-orange",
  },
};

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-night relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(45,212,191,0.08),transparent_60%)]" />

      <div className="container px-4 md:px-6 relative">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white mb-4">
            Qué puedo hacer por tu negocio
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Servicios pensados para negocios que quieren crecer sin complicarse
            con tecnología.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" stagger={0.15}>
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon;
            const styles = accentStyles[servicio.accent];

            return (
              <StaggerItem key={index}>
                <motion.div
                  className={`glass-card rounded-2xl p-6 md:p-8 h-full transition-shadow duration-300 ${styles.glow}`}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${styles.icon}`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {servicio.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {servicio.description}
                  </p>
                  <p className="text-white/70 text-sm mb-5">
                    <span className="text-teal font-medium">Ideal para:</span>{" "}
                    {servicio.ideal}
                  </p>
                  <a
                    href={servicio.href}
                    className={`text-sm font-semibold ${styles.link} transition-colors`}
                  >
                    {servicio.cta} →
                  </a>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
