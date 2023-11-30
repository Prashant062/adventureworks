import React, { useState } from 'react';
import './EcoWorks.css';
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';
import kalbarSurfboard from '../EcoWorks/kalbarSurfboard.png';
import KalbarSurboard1 from '../EcoWorks/KalbarSurboard1.png';
import SunnoxSurfboard from '../EcoWorks/SunnoxSurfboard.png';
import YambaSurfboard from '../EcoWorks/YambaSurfboard.png';
import YambaSurfboard1 from '../EcoWorks/YambaSurfboard1.png';
import YambaSurfboard2 from '../EcoWorks/YambaSurfboard2.png';
import NoosaSurfboard from '../EcoWorks/NoosaSurfboard.png';
import NoosaSurfboard1 from '../EcoWorks/NoosaSurfboard1.png';
import MontauSurfboard from '../EcoWorks/MontauSurfboard.png';
import MontauSurfboard1 from '../EcoWorks/MontauSurfBoard1.png';
import BundorSurfBoard from '../EcoWorks/BundorSurfBoard.png';
import BondiTwinSurfboard from '../EcoWorks/BondiTwinSurfboard.png';
import TeapoRainbowSurfboard from '../EcoWorks/TeapoRainbowSurfboard.png';
import TeapoRainbowSurfboard1 from '../EcoWorks/TeapoRainbowSurfboard1.png';

const EcoWorks = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            id: 1,
            images: [image1, image2, image3],
            title: 'Kiama Classic Surfboard',
            price: '$ 790.00',
            rating: '★★★☆☆(10)',
            buttonColors: ['rgb(134, 191, 200)','rgb(150, 208, 106)','rgb(54, 161, 242)']
        },
        {
            id: 2,
            images: [kalbarSurfboard,KalbarSurboard1],
            title: 'Kalbar Surfboard',
            price: '$ 850.00',
            rating: '★★★★☆(2)',
            buttonColors: ['rgb(230, 246, 90)','rgb(118, 212, 27)']
        },
        {
            id: 3,
            images: [SunnoxSurfboard],
            title: 'Sunnox Surfboard',
            price: '$ 700.00',
            rating: '★★★★★(7)',
            buttonColors: ['rgb(244, 244, 246)']
        },
        {
            id: 4,
            images: [YambaSurfboard, YambaSurfboard1,YambaSurfboard2],
            title: 'Yamba Surfboard',
            price: '$ 850.00',
            rating: '★★★★☆(6)',
            buttonColors: ['rgb(9, 139, 199)','rgb(90, 158, 249)','rgb(152, 75, 216)']
        },
        {
            id: 5,
            images: [NoosaSurfboard,NoosaSurfboard1],
            title: 'Noosa Surfboard',
            price: '$ 1,100.00',
            rating: '★★★★☆(6)',
            buttonColors: ['rgb(241, 240, 235)','rgb(220, 180, 188)']
        },
        {
            id: 6,
            images: [MontauSurfboard,MontauSurfboard1],
            title: 'Montau Turtle Surfboard',
            price: '$ 600.00',
            rating: '★★★★★(1)',
            buttonColors: ['rgb(18, 124, 194)','rgb(31, 186, 235)']
        },
        {
            id: 7,
            images: [BundorSurfBoard],
            title: 'Bundor Surfboard',
            price: '$ 670.00',
            rating: '★★★★★(1)',
            buttonColors: ['rgb(70, 71, 73)']
        },
        {
            id: 8,
            images: [BondiTwinSurfboard],
            title: 'Bondi Twin Surfboard',
            price: '$ 580.00',
            rating: '★★★★★(2)',
            buttonColors: ['rgb(241, 240, 235)']
        },
        {
            id: 9,
            images: [TeapoRainbowSurfboard,TeapoRainbowSurfboard1],
            title: 'Bondi Twin Surfboard',
            price: '$ 690.00',
            rating: '★★★★★(1)',
            buttonColors: ['rgb(179, 234, 213)','rgb(54, 161, 242)']
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
        <> 
            <div className="eco-carousel-container">
                <div className="eco-carousel">
                    {cards.slice(currentIndex, currentIndex + 2).map((card, index) => (
                        <div
                            key={index}
                            className={`eco-carousel-card ${index === 1 ? 'active' : ''}`}
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
                                                style={{ backgroundColor: card.buttonColors[buttonIndex] }}
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
                <button className="eco-arrow-left" onClick={handlePrev} disabled={currentIndex === 0}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className="eco-arrow-right" onClick={handleNext} disabled={currentIndex >= totalCards - 3}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
            <div className="eco-works-container">
                <div className="ecoWorks-content">
                    <h1>EcoWorks Surf</h1>
                    <p>Our EcoWorks line uses 100% renewable or recycled materials. We want you to feel adventure-ready and confident that your purchase will make a lasting impact.</p>
                    <button>SHOP ECOWORKS</button>
                </div>
            </div>

        </>
    );
};

export default EcoWorks;
