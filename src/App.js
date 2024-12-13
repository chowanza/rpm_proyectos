import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './componentes/Home';
import Nosotros from './componentes/Nosotros';
import Obras from './componentes/Obras';
import Clientes from './componentes/Clientes';
import Contacto from './componentes/Contacto';
import logo from './componentes/img/logo.png';
import craneImage from './componentes/img/crane.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Logo de RPM PROYECTOS" />
        <nav>
          <a href="#home">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#obras">Obras</a>
          <a href="#clientes">Clientes</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* Barra de progreso en el lado izquierdo */}
      <div className="progress-bar">
        <div className="progress" id="progress"></div>
      </div>

      {/* Imagen de la grúa con posición y animación sincronizada */}
      <img src={craneImage} alt="Grúa" className="crane" />

      <ReactFullpage
        onLeave={(origin, destination, direction) => {
          const crane = document.querySelector('.crane');
          if (crane) {
            crane.style.transform = `translateY(${destination.index * 100}vh)`; // Ajusta la posición en cada sección
          }
          document.getElementById('progress').style.height = `${((destination.index + 1) / 5) * 100}%`;
        }}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section" id="home">
              <Home />
            </div>
            <div className="section" id="nosotros">
              <Nosotros />
            </div>
            <div className="section" id="obras">
              <Obras />
            </div>
            <div className="section" id="clientes">
              <Clientes />
            </div>
            <div className="section" id="contacto">
              <Contacto />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />

      {/* Botón de volver arriba */}
      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>

      {/* Íconos de redes sociales */}
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
      </div>
    </div>
  );
}

export default App;
