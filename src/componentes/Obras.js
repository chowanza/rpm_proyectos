import React from "react";
import "./Obras.css";
import Workers from "./img/workers.png";

const Obras = () => {
  const services = [
    'Excavación y conformación de terrenos.',
    'Construcción de Cimentaciones o fundamentos Superficiales o Profundas.',
    'Estructuras de concreto armado o acero.',
    'Pavimentos rígidos en concreto.',
    'Mampostería o Cerramientos.',
    'Pisos y techos.',
    'Acabados en general.'
  ];

  return (
    <section id="Obras" className="section obras-section">
      <div className="obras-container">
        <h2 className="obras-title">
          Servicios de Construcción Según <br /> la Etapa de Tu Proyecto
        </h2>
        <div className="obras-content">
          <ul className="obras-list">
            {services.map((service, index) => (
              <li key={index} className="obras-item">
                <span className="obras-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="obras-text">{service}</span>
              </li>
            ))}
          </ul>
          <div className="obras-image">
            <img src={Workers} alt="Construction Workers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Obras;