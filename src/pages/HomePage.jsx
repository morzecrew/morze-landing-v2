import { useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Problems from '../sections/Problems';
import Directions from '../sections/Directions';
import Process from '../sections/Process';
import Results from '../sections/Results';
import CasesSection from '../sections/CasesSection';
import WhyUs from '../sections/WhyUs';
import Founders from '../sections/Founders';
import Contact from '../sections/Contact';

export default function HomePage() {
  const handleNavigate = useCallback((e, hash) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) {
      const header = document.getElementById('header');
      const offset = header ? header.offsetHeight + 20 : 20;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Problems />
        <Directions />
        <Process />
        <Results />
        <CasesSection />
        <WhyUs />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
