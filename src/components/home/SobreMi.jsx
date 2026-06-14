"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tecnologias = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "MySQL",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "PostgreSQL",
  "Vercel",
];

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 md:px-6 relative">
        <ScrollReveal className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-ink mb-8 text-center">
            Quién está del otro lado
          </h2>

          <motion.div
            className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm"
            whileHover={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-ink leading-relaxed mb-6">
              Soy Joaquín, desarrollador full stack con experiencia en React,
              Node.js y bases de datos SQL/NoSQL. Además de programar, soy mentor
              de otros desarrolladores — me gusta explicar las cosas claro y sin
              vueltas. Hoy combino desarrollo, automatización y análisis de datos
              para ayudar a pequeños negocios a aprovechar la tecnología sin
              complicarse.
            </p>
            <p className="text-ink leading-relaxed mb-8">
              No vendo tecnología por la tecnología: cada proyecto tiene que
              tener un impacto real y medible en tu negocio.
            </p>

            <motion.div
              className="flex items-center gap-3 mb-8 p-4 bg-teal/5 border border-teal/20 rounded-xl"
              whileHover={{ scale: 1.01, borderColor: "rgba(45,212,191,0.4)" }}
            >
              <GraduationCap className="w-6 h-6 text-teal shrink-0" />
              <p className="text-sm text-ink">
                <span className="font-semibold">Mentor de desarrolladores</span>{" "}
                — experiencia enseñando y acompañando a otros programadores.
              </p>
            </motion.div>

            <p className="text-sm text-subtle mb-4 font-medium text-center">
              Tecnologías con las que trabajo
            </p>
          </motion.div>
        </ScrollReveal>

        <div className="mt-6 -mx-4 md:-mx-6 bg-night rounded-2xl py-2">
          <Marquee items={tecnologias} speed={25} />
        </div>
      </div>
    </section>
  );
}
