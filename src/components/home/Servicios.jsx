"use client";

import { Monitor, Globe, ShoppingCart, Code } from "lucide-react";
import { useEffect, useState } from "react";

export default function Servicios() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const servicios = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Landing Page",
      description: "Página de aterrizaje optimizada para conversiones",
      price: "desde $100 USD",
      priceColor: "text-pink-500",
      bgIcon: "bg-pink-500",
      shadowColor: "hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]", // pink
      hoverBorder: "hover:border-pink-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Sitio Institucional",
      description: "Web corporativa completa con múltiples secciones",
      price: "desde $200 USD",
      priceColor: "text-sky-500",
      bgIcon: "bg-sky-500",
      shadowColor: "hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]", // sky
      hoverBorder: "hover:border-sky-500",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Tienda Online",
      description: "E-commerce completo con carrito y pagos",
      price: "desde $400 USD",
      priceColor: "text-green-500",
      bgIcon: "bg-green-500",
      shadowColor: "hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]", // green
      hoverBorder: "hover:border-green-500",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web App Personalizada",
      description: "Sistema a medida según tus necesidades",
      price: "desde $800 USD",
      priceColor: "text-orange-500",
      bgIcon: "bg-orange-500",
      shadowColor: "hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]", // orange
      hoverBorder: "hover:border-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 flex justify-center">
      <div className="container px-4 md:px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Servicios que transforman tu{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              presencia digital
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Soluciones web profesionales adaptadas a tus necesidades y
            presupuesto
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 border border-slate-700 rounded-xl text-center p-6 transition-all duration-300 hover:scale-105 shadow-md ${servicio.shadowColor} ${servicio.hoverBorder}`}
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center text-white rounded-full ${servicio.bgIcon}`}
              >
                {servicio.icon}
              </div>
              <div className="p-6 flex flex-col justify-between min-h-[120px]">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {servicio.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {servicio.description}
                  </p>
                </div>
                <p
                  className={`text-lg font-bold ${servicio.priceColor} mt-auto`}
                >
                  {servicio.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-opacity duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-block px-6 py-3 bg-green-500 text-white rounded-md font-semibold text-base shadow-lg animate-pulse">
            😎 Descuento del 50% por ser de los primeros clientes en esta nueva
            etapa
          </div>
        </div>
      </div>
    </section>
  );
}
