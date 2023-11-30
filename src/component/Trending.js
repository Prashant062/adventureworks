import React, { useState } from 'react';
import './Trending.css';
import Bagpack from '../Trending/Bagpack.png';
import image1 from '../Trending/image1.png'
import image2 from '../Trending/image2.png'
import image3 from '../Trending/image3.png'
import MountainBike from '../Trending/MountainBike.png'
import Scartic from '../Trending/Scartic.png'
import Scartic1 from '../Trending/Scartic1.png'
import Scartic2 from '../Trending/Scartic2.png'
import Scartic3 from '../Trending/Scartic3.png'
import Sunglasses1 from '../Trending/Sunglasses1.png'
import Sunglasses2 from '../Trending/Sunglasses2.png'
import WindSurf from '../Trending/WindSurf.png'





const Trending = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
          id: 1,
          images: [MountainBike],
          title: 'Iropa Mountain Bike',
          price: '$ 899.00',
          rating: '★★★★☆(2)',
          buttonColors: ['rgb(147, 150, 154)'],
        },
        {
          id: 2,
          images: [image1, image2, image3],
          title: 'Kiama Classic Surfboard',
          price: '$ 790.00',
          rating: '★★★★☆(10)',
          buttonColors: ['rgb(134, 191, 200)', 'rgb(150, 208, 106)', 'rgb(54, 161, 242)'],
        },
        {
          id: 3,
          images: [Scartic, Scartic1, Scartic2, Scartic3],
          title: 'Scatic Trunks',
          price: '$ 60.00',
          rating: '★★★★★(2)',
          buttonColors: [
            'rgb(136, 214, 69)',
            'rgb(98, 107, 64)',
            'rgb(229, 80, 24)',
            'rgb(1, 60, 189)',
          ],
        },
        {
          id: 4,
          images: [Bagpack],
          title: 'Kavada Pack',
          price: '$ 170.00',
          rating: '★★★★☆(2)',
          buttonColors: ['rgb(95, 86, 68)'],
        },
        {
          id: 5,
          images: [Sunglasses1, Sunglasses2],
          title: 'Pureout Sunglasses',
          price: '$ 29.00',
          rating: '★★★★☆(2)',
          buttonColors: ['rgb(163, 241, 183)', 'rgb(194, 136, 246)'],
        },
        {
          id: 6,
          images: [WindSurf],
          title: 'Cuewer WindSurf',
          price: '$ 1,500.00',
          rating: '★★★★★(2)',
          buttonColors: ['rgb(39, 130, 197)'],
        },
      ];
      

    const totalCards = cards.length;
    const [selectedButtonIndices, setSelectedButtonIndices] = useState(Array(cards.length).fill(0));

    const handleNext = () => {
        if (currentIndex < totalCards - 3) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleButtonClick = (cardIndex, buttonIndex) => {
        setSelectedButtonIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            newIndices[cardIndex] = buttonIndex;
            return newIndices;
        });
    };

    return (
        <div className="Trend-carousel-container">
            <h1>Trending</h1>
            <div className="Trend-carousel">
                {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
                    <div
                        key={index}
                        className={`Trend-carousel-card ${index === 1 ? 'active' : ''}`}
                    >
                        <div className="Trend-product">
                            <img src={card.images[selectedButtonIndices[index]]} alt={`Trend-product ${card.id}`} />
                            <div className="title">
                                <h3>{card.title}</h3>
                            </div>
                            {card.images.length > 0 && (
                                <div className="buttons">
                                    {card.images.map((image, buttonIndex) => (
                                        <button
                                            key={buttonIndex}
                                            style={{ backgroundColor: card.buttonColors[buttonIndex] }}
                                            className={`btnt${buttonIndex + 1} ${buttonIndex === selectedButtonIndices[index] ? 'selected' : ''
                                                }`}
                                            onClick={() => handleButtonClick(index, buttonIndex)}
                                        ></button>
                                    ))}
                                </div>
                            )}
                            <div className="price">{card.price}</div>
                            <div className="rating">{card.rating}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="Trend-arrow-left" onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="Trend-arrow-right" onClick={handleNext} disabled={currentIndex >= totalCards - 4}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default Trending;
