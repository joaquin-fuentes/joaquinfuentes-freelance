"use client";

import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export default function Testimonios() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const sitios = [
    {
      nombre: "Unaje - Liderando Futuro",
      tipo: "Landing Page",
      url: "https://unaje.org.ar/liderandofuturo/",
      imagen: "/images/unaje.jpeg",
    },
    {
      nombre: "Rolling Code Studio",
      tipo: "Sitio Institucional",
      url: "https://rollingcodestudio.com/",
      imagen: "/images/studio.jpeg",
    },
    {
      nombre: "Rolling Kids",
      tipo: "Sitio Institucional",
      url: "https://kids.rollingcodeschool.com/",
      imagen: "/images/rollingkids.jpeg",
    },
    {
      nombre: "RollingCode School Web",
      tipo: "Web App",
      url: "https://web.rollingcodeschool.com/",
      imagen: "/images/rollingcodeschool.jpeg",
    },
    // {
    //   nombre: "Hospedajes Cadillal",
    //   tipo: "Landing Page",
    //   url: "https://www.hospedajescadillal.com/",
    //   imagen: "/images/hospedajes.jpeg",
    // },
    {
      nombre: "Tucumán Kayak Club",
      tipo: "Landing Page",
      url: "https://tucumankayakclub.netlify.app/",
      imagen: "/images/tkc.jpeg",
    },
    {
      nombre: "Portafolio personal",
      tipo: "Landing Page",
      url: "https://joaquinfuentes.site/",
      imagen: "/images/portafolio.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 flex justify-center">
      <div className="container px-4 md:px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Clientes{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              satisfechos
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sitios.map((site, i) => (
            <div
              key={i}
              className="bg-slate-700/50 border border-slate-600 hover:border-purple-500/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] rounded-xl overflow-hidden transition-all duration-300 group hover:scale-[1.02]"
            >
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={site.imagen}
                  alt={`Captura de ${site.nombre}`}
                  className="w-full h-40 object-cover"
                />
              </a>

              <div className="p-6 space-y-2">
                <h3 className="text-white font-semibold text-lg">
                  {site.nombre}
                </h3>
                <p className="text-purple-400 text-sm">{site.tipo}</p>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Visitar sitio <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
