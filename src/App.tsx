import { useEffect } from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import Projects from '@/sections/Projects';
import Academic from '@/sections/Academic';
import About from '@/sections/About';
import Footer from '@/sections/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });

    // Set initial direction
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Academic />
          <About />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
