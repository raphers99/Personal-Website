'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';

const navLinks = [
  { num: '01', label: 'Profile', href: '#about' },
  { num: '02', label: 'Record', href: '#experience' },
  { num: '03', label: 'Work', href: '#projects' },
  { num: '04', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { threshold: 0.3 }
    );
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-sm rule-b' : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = activeSection === link.href;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="group flex items-baseline gap-2 text-[12px]"
              >
                <span className="font-mono text-[10px] text-ink-faint group-hover:text-ember transition-colors">
                  {link.num}
                </span>
                <span
                  className={`font-mono uppercase tracking-widest2 text-[11px] transition-colors ${
                    active ? 'text-ember' : 'text-ink-mute group-hover:text-ink'
                  }`}
                >
                  {link.label}
                </span>
              </button>
            );
          })}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-ink transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-paper rule-t rule-b px-6 py-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="flex items-baseline gap-3 w-full text-left py-2 font-mono uppercase tracking-widest2 text-[12px] text-ink-mute hover:text-ink"
            >
              <span className="text-ink-faint">{link.num}</span>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
