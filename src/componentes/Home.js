import React from 'react';
import { Link } from 'react-scroll';
import './hero.css';
import craneImage from './img/crane.png';

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>SERVICIOS DE PROYECTOS DE INGENIERÍA Y ARQUITECTURA</h1>
        <p>Es decir todo lo que es el proyecto...</p>
        <Link to="contacto" smooth={true} duration={500} className="hero-button">
          MÁS INFORMACIÓN
        </Link>
      </div>
      <div className="overlay-triangle"></div>
      <img src={craneImage} alt="Grúa" className="crane" />
    </div>
  );
}

export default Home;
