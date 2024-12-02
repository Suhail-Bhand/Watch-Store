import React, { useState } from 'react';
import './Hero.css';
import watch1 from '../../assets/blue-watch.png';
import watch2 from '../../assets/orange-watch.png';
import watch3 from '../../assets/yellow-watch.png';

// Preloading images to prevent layout shifts
const preloadImages = [watch1, watch2, watch3];
preloadImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

const ImageList = [
  {
    id: 1,
    img: watch1,
    price: "12.99",
    tag: "New",
    title: "Next Gen Blue digit Watch ",
    description: "A stylish and advanced blue watch with cutting-edge features.",
  },
  {
    id: 2,
    img: watch2,
    price: "13.99",
    tag: "Sale",
    title: "Best & Smart Yellow Watch",
    description: "An elegant yellow watch designed for comfort and style.",
  },
  {
    id: 3,
    img: watch3,
    price: "14.99",
    tag: "Hot",
    title: "Apple Ultra Smart Watch 2",
    description: "The ultimate smartwatch for fitness and daily activities.",
  },
];

const Hero = () => {
  const [currentWatch, setCurrentWatch] = useState({
    img: watch1,
    title: "Best & Smart Digital Products 2",
    description: "Discover the best digital products for your needs.",
  });

  const handleWatchClick = (watch) => {
    setCurrentWatch({
      img: watch.img,
      title: watch.title,
      description: watch.description,
    });
  };

  return (
    <div className="div1">
      <div className="div2"></div>
      <div className="div3">
        <div className="div4">
          <div className="text">
            <h1 className="heading1">{currentWatch.title}</h1>
            <p>{currentWatch.description}</p>
            <button className="order">Order now!</button>
            <div className="watches">
              {ImageList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleWatchClick(item)}
                  className="watch-item"
                >
                  <img src={item.img} alt={item.title} className="imagess" />
                  <div className="price_tag">
                    <p className="price">${item.price}</p>
                    <p>{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="div9">
        <div className="div10">
          <img
            src={currentWatch.img}
            alt={currentWatch.title}
            style={{ opacity: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
