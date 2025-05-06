import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6',
        isScrolled ? 'bg-navy/90 backdrop-blur shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-lightblue text-xl font-bold">
          Madhuri.dev
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-lightslate hover:text-lightblue"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate hover:text-lightblue transition-colors"
            >
              <span className="text-lightblue mr-1">{index + 1}.</span>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-navy py-6 px-4 mt-4 rounded-md shadow-lg">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 text-slate hover:text-lightblue transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-lightblue mr-1">{index + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                className="btn btn-primary w-full text-center mt-4"
                onClick={() => setMenuOpen(false)}
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
