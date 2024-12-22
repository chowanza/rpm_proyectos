import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Clientes.css';
import backgroundImage from './img/construccion.jpeg';

const testimonials = [
  {
    name: 'MARIA RODRIGUEZ',
    text: 'RPM es una constructora integral que se destaca por su versatilidad y compromiso con la calidad en cada uno de sus proyectos.',
    rating: 5,
  },
  {
    name: 'JUAN PEREZ',
    text: 'Increíble experiencia de trabajo con RPM. Altamente recomendados por su profesionalismo y atención al detalle.',
    rating: 5,
  },
  {
    name: 'ANA GÓMEZ',
    text: 'Gran experiencia con RPM. Su equipo es muy dedicado y sus proyectos hablan por sí mismos.',
    rating: 5,
  },
  {
    name: 'CARLOS DÍAZ',
    text: 'Trabajar con RPM fue una decisión acertada. Profesionales y altamente competentes.',
    rating: 5,
  },
  {
    name: 'LUIS JIMÉNEZ',
    text: 'Los mejores de Venezuela. RPM es sinónimo de calidad y profesionalismo.',
    rating: 5,
  },
];

const Clientes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="Clientes"
      className="clientes-section"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${backgroundImage}) no-repeat center center`,
        backgroundSize: 'cover',
      }}
    >
      <div className="clientes-container">
        <h2 className="section-title">TESTIMONIOS DE CLIENTES</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="testimonial-card">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clientes;