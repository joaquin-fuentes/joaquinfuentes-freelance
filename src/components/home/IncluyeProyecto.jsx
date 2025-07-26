"use client";

import { Smartphone, Server, Search, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function IncluyeProyecto() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const features = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Diseño Responsivo",
      desc: "Perfecto en celular, tablet y PC",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Publicación en Servidor",
      desc: "Tu sitio online desde el día uno",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Optimización SEO",
      desc: "Configuración básica para Google",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Soporte Completo",
      desc: "Contacto durante todo el proceso",
    },
  ];

  return (
    <section className="py-20 bg-slate-800  flex justify-center">
      <div className="container px-4 md:px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            ¿Qué incluye cada{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              proyecto?
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Todo lo que necesitás para tener presencia profesional en internet
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center mb-12">
          {features.map((f, i) => (
            <div key={i} className="group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-base text-white">
            <strong className="text-purple-400">Bonus:</strong> Mantenimiento
            opcional desde $10 USD/mes
          </p>
          <p className="text-sm text-gray-400">
            Actualizaciones, backups y soporte técnico continuo
          </p>
        </div>
      </div>
    </section>
  );
}
