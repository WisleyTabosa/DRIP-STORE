import React, { useState, useEffect } from 'react';
import './styles.css';

const banners = [
  {
    id: 1,
    image: require('../../assets/images/banner_1.png'),
    title1: 'Promoção de Verão',
    title2: 'Até 50% OFF',
    title3: 'Aproveite agora mesmo',
    link: '#',
  },
  {
    id: 2,
    image: require('../../assets/images/banner_2.png'),
    title1: 'Lançamentos Exclusivos',
    title2: 'Coleção 2024',
    title3: 'Moda urbana e casual',
    link: '#',
  },
  {
    id: 3,
    image: require('../../assets/images/banner_3.png'),
    title1: 'Frete Grátis',
    title2: 'Em pedidos acima de R$ 200',
    title3: 'Válido para todo o Brasil',
    link: '#',
  },
];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = banners.length;

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container">
      <button className="nav-button left" onClick={prevSlide}>
        ❮
      </button>

      {banners.map((item, index) => (
        <div
          className={`carousel-slide ${index === current ? 'active' : ''}`}
          key={item.id}
        >
          <div className="banner-container">
            <div className="banner-content">
              <h1 className="warning">{item.title1}</h1>
              <h2 className="dark-gray">{item.title2}</h2>
              <p className="dark-gray-2">{item.title3}</p>
              <a href={item.link} className="primary-button">
                Comprar Agora
              </a>
            </div>
            <div className="banner-image">
              <img src={item.image} alt={`Banner ${item.id}`} />
            </div>
          </div>
        </div>
      ))}

      <button className="nav-button right" onClick={nextSlide}>
        ❯
      </button>

      {/* 🔘 Dots indicadores */}
      <div className="dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
