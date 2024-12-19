import React from 'react';
import './Nosotros.css';
import image1 from './img/casco.png';
import image2 from './img/edificio.png';

const Nosotros = () => {
  return (
    <section className="nosotros-section">
      <div className="nosotros-container">
        {/* Primer bloque */}
        <div className="nosotros-block">
          <img src={image1} alt="Equipo de construcción" className="nosotros-image" />
          <div className="nosotros-text">
            <h3>Innovación y Tecnología</h3>
            <p>
              En nuestra empresa, combinamos innovación y tecnología para ofrecer soluciones integrales en 
              proyectos de construcción. Desde la planificación hasta la ejecución, nuestro equipo trabaja 
              con los estándares más altos de calidad para garantizar resultados excepcionales.
            </p>
          </div>
        </div>

        {/* Segundo bloque */}
        <div className="nosotros-block">
          <div className="nosotros-text">
            <h3>Compromiso con la Sostenibilidad</h3>
            <p>
              Creemos en construir un futuro sostenible. Por eso, utilizamos materiales eco-amigables y 
              procesos eficientes que reducen el impacto ambiental, mientras aseguramos la durabilidad y la 
              funcionalidad de nuestras construcciones.
            </p>
          </div>
          <img src={image2} alt="Edificio moderno" className="nosotros-image" />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
