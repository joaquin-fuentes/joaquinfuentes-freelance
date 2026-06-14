"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Carousel from "@/components/ui/Carousel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const proyectos = [
  {
    nombre: "RollingCode School Web",
    industria: "Educación / EdTech",
    problema:
      "Necesitaban una plataforma web para gestionar cursos, alumnos y contenido de forma centralizada.",
    solucion:
      "Desarrollo de una web app completa con panel de administración, gestión de usuarios y contenido dinámico.",
    resultado:
      "Antes gestionaban todo de forma dispersa; ahora tienen un sistema unificado accesible desde cualquier dispositivo.",
    url: "https://web.rollingcodeschool.com/",
    imagen: "/images/rollingcodeschool.jpeg",
    tipo: "Web App",
  },
  {
    nombre: "Rolling Code Studio",
    industria: "Agencia digital",
    problema:
      "No tenían presencia online profesional que transmitiera confianza a clientes potenciales.",
    solucion:
      "Sitio institucional moderno, responsive y optimizado para mostrar servicios y portfolio.",
    resultado:
      "Presencia digital sólida que refleja la calidad del estudio y facilita el contacto con nuevos clientes.",
    url: "https://rollingcodestudio.com/",
    imagen: "/images/studio.jpeg",
    tipo: "Sitio institucional",
  },
  {
    nombre: "Rolling Kids",
    industria: "Educación infantil",
    problema:
      "Necesitaban comunicar su propuesta educativa de forma clara a padres y familias.",
    solucion:
      "Landing institucional con información clara de programas, horarios y formas de contacto.",
    resultado:
      "Los padres encuentran toda la info que necesitan en un solo lugar, sin depender de consultas manuales.",
    url: "https://kids.rollingcodeschool.com/",
    imagen: "/images/rollingkids.jpeg",
    tipo: "Sitio institucional",
  },
  {
    nombre: "Unaje — Liderando Futuro",
    industria: "Organización / Eventos",
    problema:
      "Requerían una landing para promocionar un programa y captar inscripciones de forma digital.",
    solucion:
      "Landing page enfocada en conversión con información del programa y llamados a la acción claros.",
    resultado:
      "Canal digital activo para difundir el programa y recibir consultas de interesados.",
    url: "https://unaje.org.ar/liderandofuturo/",
    imagen: "/images/unaje.jpeg",
    tipo: "Landing page",
  },
  {
    nombre: "Tucumán Kayak Club",
    industria: "Deporte / Club",
    problema:
      "El club no tenía presencia web y dependía del boca a boca para atraer nuevos socios.",
    solucion:
      "Sitio web con información del club, actividades, galería y contacto directo.",
    resultado:
      "Visibilidad online que permite que nuevos interesados conozcan el club antes de contactarse.",
    url: "https://tucumankayakclub.vercel.app/",
    imagen: "/images/tkc.jpeg",
    tipo: "Landing page",
  },
];

function ProyectoSlide({ proyecto }) {
  return (
    <article className="glass-card rounded-2xl overflow-hidden glow-teal mx-8 md:mx-14">
      <div className="grid md:grid-cols-2">
        <a
          href={proyecto.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden group"
        >
          <img
            src={proyecto.imagen}
            alt={`Captura de ${proyecto.nombre}`}
            className="w-full h-56 md:h-full min-h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent md:bg-gradient-to-r" />
        </a>

        <div className="p-6 md:p-8 flex flex-col justify-center gap-4">
          <div>
            <span className="text-teal text-xs font-medium uppercase tracking-wide">
              {proyecto.tipo}
            </span>
            <h3 className="text-white font-semibold text-xl md:text-2xl mt-1">
              {proyecto.nombre}
            </h3>
            <p className="text-muted text-sm mt-0.5">{proyecto.industria}</p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-white/85">
              <span className="text-orange font-semibold">Problema:</span>{" "}
              {proyecto.problema}
            </p>
            <p className="text-white/85">
              <span className="text-teal font-semibold">Solución:</span>{" "}
              {proyecto.solucion}
            </p>
            <p className="text-white/85">
              <span className="text-teal font-semibold">Resultado:</span>{" "}
              {proyecto.resultado}
            </p>
          </div>

          <a
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal hover:text-teal/80 text-sm font-semibold mt-2"
          >
            Ver proyecto <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-20 bg-night relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 md:px-6 relative">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos y resultados
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Casos reales donde la tecnología resolvió un problema concreto del
            negocio.
          </p>
        </ScrollReveal>

        <Carousel
          items={proyectos}
          renderSlide={(proyecto) => <ProyectoSlide proyecto={proyecto} />}
          autoPlayMs={7000}
        />

        <ScrollReveal className="text-center mt-12" delay={0.2}>
          <motion.a
            href="#contacto"
            className="inline-flex items-center justify-center bg-orange text-white font-semibold px-7 py-3.5 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Quiero un proyecto así para mi negocio
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
