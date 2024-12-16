import React, { useState } from 'react';
import './Header.css'; // Importa los estilos CSS
import logo from './img/logo.png';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logoHeader" />
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#obras">Obras</a>
        <a href="#clientes">Clientes</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}

export default Header;