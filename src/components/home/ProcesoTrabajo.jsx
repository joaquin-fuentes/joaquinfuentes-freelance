"use client";

import { Users, Target, Code, Rocket, Clock, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProcesoTrabajo() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const pasos = [
    {
      numero: "1",
      icono: <Users className="w-6 h-6 text-purple-300" />,
      titulo: "Reunión Inicial",
      descripcion: "Entendemos tu visión y objetivos",
    },
    {
      numero: "2",
      icono: <Target className="w-6 h-6 text-purple-300" />,
      titulo: "Diseño y Propuesta",
      descripcion: "Creamos mockups y definimos alcance",
    },
    {
      numero: "3",
      icono: <Code className="w-6 h-6 text-purple-300" />,
      titulo: "Desarrollo",
      descripcion: "Programación con avances constantes",
    },
    {
      numero: "4",
      icono: <Rocket className="w-6 h-6 text-purple-300" />,
      titulo: "Entrega + Soporte",
      descripcion: "Lanzamiento y capacitación",
    },
    {
      numero: "5",
      icono: <Clock className="w-6 h-6 text-purple-300" />,
      titulo: "Mantenimiento",
      descripcion: "Soporte continuo opcional",
    },
  ];

  return (
    <section className="py-20 bg-slate-900  flex justify-center">
      <div className="container px-4 md:px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Proceso de{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              trabajo
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Metodología probada para resultados excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {pasos.map((paso, i) => (
            <div key={i} className="text-center relative">
              {/* Número circular */}
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                {paso.numero}
              </div>

              {/* Ícono */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-slate-700 flex items-center justify-center">
                {paso.icono}
              </div>

              {/* Título y descripción */}
              <h3 className="text-white font-semibold text-lg mb-1">
                {paso.titulo}
              </h3>
              <p className="text-gray-400 text-sm">{paso.descripcion}</p>

              {/* Flecha hacia la derecha */}
              {i < pasos.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-8 -right-4 text-purple-400 w-5 h-5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
