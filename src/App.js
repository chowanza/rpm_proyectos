import React from 'react';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Nosotros from './componentes/Nosotros';
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
      <section id="diseno" className="section">
        <Home />
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
      <section id="Contacto" className="section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
