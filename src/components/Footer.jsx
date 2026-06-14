import { Github, Linkedin, Mail } from "lucide-react";
import Logo from "@/components/Logo";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-night border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <Logo size={28} />
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-lg">
                Joaquín Fuentes
              </p>
            </div>
            <p className="text-muted text-sm">
              Soluciones digitales para pequeños negocios
            </p>
          </div>

          <div>
            <p className="text-white text-sm font-semibold mb-3">Secciones</p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted hover:text-teal text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="text-muted hover:text-teal text-sm transition-colors"
              >
                Contacto
              </a>
            </nav>
          </div>

          <div>
            <p className="text-white text-sm font-semibold mb-3">Contacto</p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-muted hover:text-teal text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-teal text-sm transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-teal text-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-muted text-sm">
            © {year} Joaquín Fuentes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
