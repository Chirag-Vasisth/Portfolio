import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// Import Components
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certification from './components/Certification'
import Training from './components/Training'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'Home',
    'About',
    'Projects',
    'Skills',
    'Education',
    'Certification',
    'Training',
    'Achievements',
    'Contact Me'
  ];

  return (
    <div className="relative min-h-screen bg-dark">
      <CustomCursor />
      {/* Background blobs */}
      <div className="bg-blob-1"></div>
      <div className="bg-blob-2 fixed"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darker/80 backdrop-blur-md py-4 border-b border-glassBorder' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a href="#" className="text-2xl hover:opacity-80 transition-opacity block">
              <span style={{ fontFamily: "'Dancing Script', cursive" }} className="text-3xl text-primary font-bold">Chirag Vasisth</span>
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="nav-link text-sm font-medium"
              >
                {link}
              </motion.a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: '100vh' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="fixed inset-0 z-40 bg-darker/95 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-semibold text-gray-300 hover:text-primary transition-colors border-b border-glassBorder pb-4"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <div id="education">
          <Education />
        </div>
        <div id="certification">
          <Certification />
        </div>
        <div id="training">
          <Training />
        </div>
        <div id="achievements">
          <Experience />
        </div>
        <div id="contact-me">
          <Contact />
        </div>
      </main>

      <footer className="py-8 text-center border-t border-glassBorder relative z-10 bg-darker/50">
        <p className="text-gray-500 text-sm">
          Designed & Built with <span className="text-primary">React</span>, <span className="text-primary">Tailwind</span> & <span className="text-primary">Express</span>
          <br />© {new Date().getFullYear()} Chirag Vasisth. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
