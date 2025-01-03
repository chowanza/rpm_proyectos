import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';
import logo from './img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Función para manejar el scroll hasta el final solo en desktop
  const handleContactClick = (e) => {
    // Verificar si es dispositivo móvil (ancho menor a 768px)
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile) {
      e.preventDefault();
      
      // Calculamos la altura total del documento
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      
      // Hacemos scroll suave hasta el final solo en desktop
      window.scrollTo({
        top: documentHeight,
        behavior: 'smooth'
      });
    }
    
    // En móvil, dejamos que el comportamiento sea normal (no prevenimos el evento)
    closeMenu();
  };

  const menuItems = [
    { href: '#Inicio', label: 'Inicio' },
    { href: '#Galeria', label: 'Galeria' },
    { href: '#Nosotros', label: 'Nosotros' },
    { href: '#Obras', label: 'Obras' },
    { href: '#Clientes', label: 'Clientes' },
    { href: '#Contacto', label: 'Contacto', onClick: handleContactClick }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="RPM Proyectos de Ingeniería" className="logo" />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="nav-link"
              onClick={item.onClick || undefined}
            >
              <span className="nav-text">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="menu-toggle"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          <div className="hamburger-icon">
            <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-container">
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="mobile-nav-link"
              onClick={item.onClick || closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      <div 
        className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`} 
        onClick={closeMenu}
      />
    </header>
  );
};

export default Header;