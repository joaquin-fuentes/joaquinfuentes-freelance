"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div
          className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            {/* Badge integrado */}
            <span className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-cyan-500 border-0 shadow-md">
              ✨ Desarrollador Web Freelance
            </span>

            {/* Título principal */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
              Creá tu sitio web profesional con <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Joaquín Fuentes
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Diseño y desarrollo web a medida, con enfoque moderno, SEO,
              responsive y soporte completo.
            </p>
          </div>

          {/* Botón y texto de respuesta */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <Link
              href="https://wa.me/5493816097754"
              target="_blank"
              className="cursor-pointer"
            >
              <button className=" cursor-pointer inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="mr-2 h-5 w-5" />
                Cotizá tu sitio ahora
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Efectos flotantes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
}
