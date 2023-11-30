import React, { useState } from 'react';
import './NewArrivals.css';
import IgnisCooking from '../NewArrivals/IgnisCooking.png'
import IgnisCooking1 from '../NewArrivals/IgnisCooking1.png'
import LentoSandle from '../NewArrivals/LentoSandle.png'
import LentoSandle1 from '../NewArrivals/LentoSandle1.png'
import LentoSandle2 from '../NewArrivals/LentoSandle2.png'
import LentoSandle3 from '../NewArrivals/LentoSandle3.png'
import LentoSandle4 from '../NewArrivals/LentoSandle4.png'
import LentoSandle5 from '../NewArrivals/LentoSandle5.png'
import LentoSandle6 from '../NewArrivals/LentoSandle6.png'
import LentoSandle7 from '../NewArrivals/LentoSandle7.png'
import swimShuit from '../NewArrivals/swimShuit.png'
import SleepingBag from '../NewArrivals/SleepingBag.png'
import SleepingBag1 from '../NewArrivals/SleepingBag1.png'
import NeptosBackpack from '../NewArrivals/NeptosBackpack.png'
import Tent from '../NewArrivals/Tent.png'
import Tent1 from '../NewArrivals/Tent1.png'
import Tent2 from '../NewArrivals/Tent2.png'
import Tent3 from '../NewArrivals/Tent3.png'
import YambaSurfboard from '../NewArrivals/YambaSurfboard.png'
import YambaSurfboard1 from '../NewArrivals/YambaSurfboard1.png'
import YambaSurfboard2 from '../NewArrivals/YambaSurfboard2.png'

const NewArrivals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const cards = [
        {
            id: 1,
            images: [YambaSurfboard, YambaSurfboard1, YambaSurfboard2],
            title: 'Yamba Surfboard',
            price: '$ 850.00',
            rating: '★★★★☆(6)',
            buttonColors: ['rgb(229, 117, 183)','rgb(150, 208, 106)','rgb(152, 75, 216)']
        },
        {
            id: 2,
            images: [LentoSandle,LentoSandle1,LentoSandle2,LentoSandle3,LentoSandle4,LentoSandle5,LentoSandle6,LentoSandle7],
            title: 'Lentu Sandals',
            price: '$ 55.00',
            rating: '★★★★★(11)',
            buttonColors: ['rgb(9, 139, 199)','rgb(90, 158, 249)','rgb(74, 202, 220)','rgb(74, 202, 220)','rgb(234, 80, 167)','rgb(254, 148, 39)','rgb(254, 210, 88)','rgb(249, 65, 59)']
        },
        {
            id: 3,
            images: [swimShuit],
            title: 'Tropez Print SwimSuit',
            price: '$ 50.00',
            rating: '★★★★★(2)',
            buttonColors: ['rgb(1, 189, 250)']
        },
        {
            id: 4,
            images: [IgnisCooking, IgnisCooking1],
            title: 'Ignis Cooking System',
            price: '$ 150.00',
            rating: '★★★★★(1)',
            buttonColors: ['rgb(193, 190, 177)','rgb(67, 58, 53)']
        },
        {
            id: 5,
            images: [NeptosBackpack],
            title: 'Neptos Backpack',
            price: '$ 320.00',
            rating: '★★★★☆(2)',
            buttonColors: ['rgb(107, 70, 77)']
           
        },
        {
            id: 6,
            images: [SleepingBag, SleepingBag1],
            title: 'Bacalen Sleeping Bag',
            price: '$ 90.00',
            rating: '★★★★☆(2)',
            buttonColors: ['rgb(250, 106, 44)','rgb(134, 19, 8)']
        },
        {
            id: 7,
            images: [Tent,Tent1,Tent2,Tent3],
            title: 'Nimbolo Target',
            price: '$330.00 $231.00',
            rating: '★★★★★(2)',
            buttonColors: ['rgb(1, 151, 246)','rgb(230, 55, 62)','rgb(244, 60, 87)','rgb(75, 231, 135)']
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
        <div className="New-carousel-container">
            <h1>New Arrivals</h1>
            <div className="New-carousel">
                {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
                    <div
                        key={index}
                        className={`New-carousel-card ${index === 1 ? 'active' : ''}`}
                    >
                        <div className="New-product">
                            <img src={card.images[selectedButtonIndices[index]]} alt={`New-product ${card.id}`} />
                            <div className="title">
                                <h3>{card.title}</h3>
                            </div>
                            {card.images.length > 0 && (
                                <div className="buttons">
                                    {card.images.map((image, buttonIndex) => (
                                        <button
                                            key={buttonIndex}
                                            style={{ backgroundColor: card.buttonColors[buttonIndex] }}
                                            className={`btnN${buttonIndex + 1} ${buttonIndex === selectedButtonIndices[index] ? 'selected' : ''}`}
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
            <button className="New-arrow-left" onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="New-arrow-right" onClick={handleNext} disabled={currentIndex >= totalCards - 3}>
                <i className="fa-solid fa-angle-right"></i>
            </button> 
        </div>
    );
};

export default NewArrivals;
