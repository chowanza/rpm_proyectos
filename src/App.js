import React from 'react';
import Header from './componentes/Header';
import Hero from './componentes/Hero';
import SliderVideo from './componentes/SliderVideo';
import Nosotros from './componentes/Nosotros'; // Importa el componente Nosotros
import Obras from './componentes/Obras';
import Clientes from './componentes/Clientes';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Secciones conectadas por el Header */}
      <section id="Inicio" className="section">
        <Hero />
      </section>

      <section id="Galeria" className="section">
        <SliderVideo />
      </section>

      <section id="Nosotros" className="section">
        <Nosotros />
      </section>

      <section id="Obras" className="section">
        <Obras />
      </section>

      <section id="Clientes" className="section">
        <Clientes />
      </section>

      <section id="footer" className="section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
