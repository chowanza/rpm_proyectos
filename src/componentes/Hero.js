import React from 'react';
import './Hero.css';
import backgroundImage from './img/herofondo.jpeg'; // Imagen de fondo
import workersImage from './img/hus.png'; // Imagen de los trabajadores

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            <span className="highlight">SERVICIOS DE PROYECTOS DE <br />
            INGENIERÍA Y ARQUITECTURA</span>
          </h1>
          <p>
            Es decir todo lo que es el proyecto. Levantamientos, planos arquitectónicos, de estructuras, 
            fundaciones, distribución, eléctricos, sanitarios, mecánicos. Todo eso.
          </p>
          <div className="hero-buttons">
            <a href="#Nosotros" className="btn btn-primary">MÁS INFORMACIÓN</a>
            <a href="#Contacto" className="btn btn-secondary">CONTACTANOS</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={workersImage} alt="Trabajadores de ingeniería" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
