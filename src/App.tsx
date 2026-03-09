import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const sections = ['about', 'projects', 'skills', 'contact'];

function App() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <nav>
        <a
          href="#"
          className="logo"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          PORT<span>.</span>FOLIO
        </a>
        {sections.map((id) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <footer className="footer">
        <span>&copy; 2026 <strong>John Doe</strong></span>
        <span>Built with <strong>React</strong> &amp; <strong>Three.js</strong></span>
        <span style={{ letterSpacing: '0.2em' }}>AVAILABLE &middot; 2026</span>
      </footer>
    </div>
  );
}

export default App;
