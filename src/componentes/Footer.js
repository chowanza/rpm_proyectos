import React, { useState } from "react";
import "./Footer.css";
import axios from "axios";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/send-email", formData);
      alert(response.data); // Mensaje de éxito
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Error al enviar el correo. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="container">
      {/* Formulario */}
      <div className="form-section">
        <form action="https://formsubmit.co/iambatmanmfa@gmail.com" method="POST">
          <label htmlFor="nombre">NOMBRE</label>
          <input
            type="text"
            id="nombre"
            placeholder="NOMBRE"
            required
            value={formData.nombre}
          />

          <label htmlFor="email">TU EMAIL</label>
          <input
            type="email"
            id="email"
            placeholder="TU EMAIL"
            required
            value={formData.email}
          />

          <label htmlFor="asunto">ASUNTO</label>
          <input
            type="text"
            id="asunto"
            placeholder="ASUNTO"
            required
            value={formData.asunto}
          />

          <label htmlFor="mensaje">TU MENSAJE</label>
          <textarea
            id="mensaje"
            rows="5"
            placeholder="TU MENSAJE"
            required
            value={formData.mensaje}
          ></textarea>

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
            Lunes a viernes:<br />
            09:00 h - 18:00 h<br />
            Sábado:<br />
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
