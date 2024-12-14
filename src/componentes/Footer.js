import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ÚNETENOS</h3>
          <div className="content-box">
            <p>Calle Cualquiera, 123. <br /> 12345 Cualquier Ciudad</p>
            <p>hola@unsitioegenial.es</p>
          </div>
        </div>
        <div className="footer-section">
          <h3>HORARIO COMERCIAL</h3>
          <div className="content-box">
            <p><b>Lunes a viernes:</b> <br></br> 09:00 h - 18:00 h</p>
            <p><b>Sábado:</b> <br></br> 09:00 h - 12:00 h</p>
          </div>
        </div>
        <div className="footer-section">
          <h3>SÍGUENOS</h3>
          <div className="content-box">
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
