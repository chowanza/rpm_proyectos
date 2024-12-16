import React from "react";
import "./Footer.css";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import logo from './img/logo.png';

const Footer = () => {
  return (
    <div className="container">
      {/* Formulario */}
      <div className="form-section">
        <img src={logo} alt="Logo" className="logo" />
        <form>
          <label htmlFor="nombre">NOMBRE</label>
          <input type="text" id="nombre" placeholder="NOMBRE" required />

          <label htmlFor="email">TU EMAIL</label>
          <input type="email" id="email" placeholder="TU EMAIL" required />

          <label htmlFor="asunto">ASUNTO</label>
          <input type="text" id="asunto" placeholder="ASUNTO" required />

          <label htmlFor="mensaje">TU MENSAJE</label>
          <textarea id="mensaje" rows="5" placeholder="TU MENSAJE"></textarea>

          <button type="submit">
            ENVIAR <span>➤</span>
          </button>
        </form>
      </div>

      {/* Información */}
      <div className="info-section">
        <div className="info-block">
          <h3>ÚNETENOS</h3>
          <p>
            Calle Cualquiera, 123.<br />
            12345 Cualquier Ciudad<br />
            hola@unsitiogenial.es
          </p>
        </div>
        <div className="info-block">
          <h3>HORARIO COMERCIAL</h3>
          <p>
            <b>Lunes a viernes:</b><br />
            09:00 h - 18:00 h<br />
            <b>Sábado:</b><br />
            09:00 h a 12:00 h
          </p>
        </div>
        <div className="info-block">
          <h3>SÍGUENOS</h3>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
