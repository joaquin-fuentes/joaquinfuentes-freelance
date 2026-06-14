import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CtaFinal from "@/components/home/CtaFinal";
import DolorIdentificacion from "@/components/home/DolorIdentificacion";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import ProcesoTrabajo from "@/components/home/ProcesoTrabajo";
import Proyectos from "@/components/home/Proyectos";
import Servicios from "@/components/home/Servicios";
import SobreMi from "@/components/home/SobreMi";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DolorIdentificacion />
        <Servicios />
        <ProcesoTrabajo />
        <Proyectos />
        <SobreMi />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
