import React, { useState } from 'react';
import './ProductCollection.css';
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';
import underWater from '../Assets/underWater.png';
import underWater2 from '../Assets/underWater2.png';
import underWater3 from '../Assets/underWater3.png';
import swimShuit from '../Assets/swimShuit.png';
import sandle from '../Assets/sandle.png';
import slipers from '../Assets/slipers.png';

const ProductCollection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const cards = [
        {
            id: 1,
            images: [image1, image2, image3],
            title: 'Kiama Classic Surfboard',
            price: '$ 790.00',
            rating: '★★★☆☆(10)',
        },
        {
            id: 2,
            images: [swimShuit],
            title: 'Swimsuit',
            price: '$ 45.00',
            rating: '★★★☆☆(2)',
        },
        {
            id: 3,
            images: [underWater, underWater2, underWater3],
            title: 'Tomeq Snorkel Package',
            price: '$ 78.00',
            rating: '★★★☆☆(3)',
        },
        {
            id: 4,
            images: [sandle, slipers],
            title: 'Paltoni Sandals',
            price: '$ 60.00',
            rating: '★★★☆☆(2)',
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
        <div className="carousel-container">
            <h1>Get the gear</h1>
            <div className="carousel">
                {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
                    <div
                        key={index}
                        className={`carousel-card ${index === 1 ? 'active' : ''}`}
                    >
                        <div className="product">
                            <img src={card.images[selectedButtonIndices[index]]} alt={`Product ${card.id}`} />
                            <div className="title">
                                <h3>{card.title}</h3>
                            </div>
                            {card.images.length > 0 && (
                                <div className="buttons">
                                    {card.images.map((image, buttonIndex) => (
                                        <button
                                            key={buttonIndex}
                                            className={`btn${buttonIndex + 1} ${buttonIndex === selectedButtonIndices[index] ? 'selected' : ''}`}
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
            <button className="arrow-left" onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="arrow-right" onClick={handleNext} disabled={currentIndex >= totalCards - 3}>
                <i className="fa-solid fa-angle-right"></i>
            </button> 
        </div>
    );
};

export default ProductCollection;
