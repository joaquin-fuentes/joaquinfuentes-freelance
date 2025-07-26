export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800  flex justify-center">
      <div className="container px-4 md:px-6 text-center">
        <p className="text-gray-400">
          © {year} Joaquín Fuentes - Desarrollador Web Freelance. Todos los
          derechos reservados.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Transformando ideas en experiencias digitales excepcionales
        </p>
      </div>
    </footer>
  );
}
