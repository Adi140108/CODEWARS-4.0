import React, { useState, useEffect, useCallback } from 'react';
import '../styles/index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = useCallback(() => {
    const sectionIds = ['home', 'about', 'roadmap', 'rounds', 'sponsors', 'rules', 'team', 'faq'];
    let currentActive = 'home';

    for (let i = 0; i < sectionIds.length; i++) {
      const el = document.getElementById(sectionIds[i]);
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (top <= 200) {
          currentActive = sectionIds[i];
        }
      }
    }

    setActiveSection(currentActive);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#roadmap', label: 'Timeline', id: 'roadmap' },
    { href: '#rounds', label: 'Rounds', id: 'rounds' },
    { href: '#sponsors', label: 'Sponsors', id: 'sponsors' },
    { href: '#rules', label: 'Rules', id: 'rules' },
    { href: '#team', label: 'Team', id: 'team' },
    { href: '#faq', label: 'FAQ', id: 'faq' },
  ];

  const activeStyle = {
    color: '#00f3ff',
    textShadow: '0 0 10px rgba(0, 243, 255, 0.5)',
  };

  const activeBarStyle = {
    position: 'absolute',
    bottom: '-5px',
    left: '0',
    width: '100%',
    height: '2px',
    backgroundColor: '#00f3ff',
    boxShadow: '0 0 8px #00f3ff',
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a href="#"><img src="/assets/Code Wars 4.0 Logo.png" alt="CodeWars" className="nav-logo-img" /></a>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={isActive ? activeStyle : {}}
              >
                {item.label}
                {isActive && <span style={activeBarStyle}></span>}
              </a>
            );
          })}
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="cta-btn" onClick={() => setIsOpen(false)}>Register</a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>

      <style>{`
        .navbar {
          background-color: rgba(5, 5, 5, 0.9);
          backdrop-filter: blur(10px);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(0, 243, 255, 0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo-img {
          height: 50px;
          filter: drop-shadow(0 0 5px var(--primary-color));
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--text-color);
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .nav-links a:hover {
          color: var(--primary-color);
          text-shadow: 0 0 10px var(--primary-color);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: width 0.3s;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .cta-btn {
          padding: 0.5rem 1.5rem;
          border: 1px solid var(--primary-color);
          border-radius: 5px;
          color: var(--primary-color) !important;
          transition: all 0.3s ease;
          background: transparent;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          display: inline-block;
          margin-left: 2rem;
        }

        .cta-btn:hover {
          background-color: var(--primary-color);
          color: #000 !important;
          box-shadow: 0 0 15px var(--primary-color);
        }
        
        .cta-btn::after {
          display: none !important;
        }
        
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }
        
        .bar {
          width: 25px;
          height: 3px;
          background-color: #fff;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: rgba(5, 5, 5, 0.95);
            flex-direction: column;
            padding: 2rem 0;
            clip-path: circle(0% at 100% 0);
            transition: all 0.5s ease-in-out;
            border-bottom: 1px solid var(--primary-color);
          }

          .nav-links.active {
            clip-path: circle(150% at 100% 0);
          }
          
          .bar.open:nth-child(1) {
            transform: rotate(45deg) translate(5px, 6px);
          }
          .bar.open:nth-child(2) {
            opacity: 0;
          }
          .bar.open:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -6px);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
