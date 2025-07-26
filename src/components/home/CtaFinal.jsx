"use client";

import { Mail, Zap, CheckCircle, Globe } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 relative overflow-hidden  flex justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.4),rgba(255,255,255,0))]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight">
            ¿Querés llevar tu negocio al{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              siguiente nivel?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            No esperes más. Tu competencia ya está online.
            <br />
            <strong>Es tu momento de brillar en internet.</strong>
          </p>

          {/* WhatsApp + Email */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://wa.me/5493816097754"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Hablá conmigo por WhatsApp
            </a>

            <div className="text-white text-sm text-center">
              <p className="text-gray-300">O escribime por email:</p>
              <p className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1">
                <Mail className="w-4 h-4" />
                joaquin.fuentes1327@gmail.com
              </p>
            </div>
          </div>

          {/* Beneficios */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Respuesta rápida</p>
              <p className="text-gray-300 text-sm">En menos de 2 horas</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Garantía de calidad</p>
              <p className="text-gray-300 text-sm">100% satisfacción</p>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Presencia global</p>
              <p className="text-gray-300 text-sm">Visible en todo el mundo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
