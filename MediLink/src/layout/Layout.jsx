import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import Routers from "../routes/Routers";
import Lenis from '@studio-freight/lenis'; // Importar Lenis

const Layout = () => {

  useEffect(() => {
    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de suavidad
      direction: 'vertical', // Scroll vertical
      gestureDirection: 'vertical', 
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Capturar el evento de scroll
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      console.log({ scroll, limit, velocity, direction, progress });
    });

    // Función para animar el scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup al desmontar el componente
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <> 
        <Routers />
        <Footer /> 
    </>
  );
};

export default Layout;
