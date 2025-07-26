import Footer from "@/components/Footer";
import CtaFinal from "@/components/home/CtaFinal";
import Hero from "@/components/home/Hero";
import IncluyeProyecto from "@/components/home/IncluyeProyecto";
import ProcesoTrabajo from "@/components/home/ProcesoTrabajo";
import Servicios from "@/components/home/Servicios";
import Testimonios from "@/components/home/Testimonios";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Servicios />
      <IncluyeProyecto />
      <Testimonios />
      <ProcesoTrabajo />
      <CtaFinal />
      <Footer />
    </>
  );
}
