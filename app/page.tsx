import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Splash from '@/components/Splash';
import About from '@/components/About';
import Volunteer from '@/components/Volunteer';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Splash />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Volunteer />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
