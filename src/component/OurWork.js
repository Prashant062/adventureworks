import React, { useState } from 'react';
import './OurWork.css';
import Camping1 from '../Assets/camping1.png'
import Camping from '../Assets/camping.jpeg'
import cycling from '../Assets/cycling.jpeg'
import cycling1 from '../Assets/cycling1.png'
import swimming from '../Assets/swimming.jpeg'
import swimming1 from '../Assets/swimming1.png'
import climbing1 from '../Assets/climbing1.png'
import climbing from '../Assets/climbing.jpeg'
import snowBoarding from '../Assets/snowBoarding.jpeg'
import snowboarding1 from '../Assets/snowboarding1.png'
import yoga1 from '../Assets/yoga1.png'
import yoga from '../Assets/yoga.jpeg'

const OurWork = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
    const adventure = [
        {
            id: 21,
            image: Camping,
            title: 'Camping',
            logo: Camping1,
        },
        {
            id: 22,
            image: cycling,
            title: 'cycling',
            logo: cycling1,
        },
        {
            id: 23,
            image: swimming,
            title: 'swimming',
            logo: swimming1,
        },
        {
            id: 24,
            image: climbing,
            title: 'climbing',
            logo: climbing1,
        },
        {
            id: 25,
            image: snowBoarding,
            title: 'snowBoarding',
            logo: snowboarding1,
        },
        {
            id: 26,
            image: yoga,
            title: 'yoga',
            logo: yoga1,
        },
    ];
    const handleNext = () => {
        if (currentIndex < adventure.length - 4) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <>
            <div className="work-container">
                <div disabled contentEditable="false" style={{position: 'relative', top: '50px' }}>
                    <p style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '72px' }}>
                            <strong>what's your next</strong>
                        </span>
                    </p>
                    <p style={{ textAlign: 'center', position: 'relative', left: '65px', bottom: '75px' }}>
                        <em style={{ fontFamily: 'Comic Sans Ms, Cursive;', fontSize: '90px', fontWeight: '80rem', fontStyle: 'italic' }}>
                            <span style={{ color: '#0066ff' }}>&nbsp;adventure?</span>
                        </em>
                    </p>
                </div>

                <div className="card-slider">
                    <ul className="card-list" style={{ transform: `translateX(${-currentIndex * 25}%)` }}>
                        {adventure.slice(currentIndex, currentIndex + 4).map((activity) => (
                            <li key={activity.id} className='work-list-items'>
                                <a className='adventure-work-item' href="/">
                                    <div className='card-container'>
                                        <div className='background-image' style={{ backgroundImage: `url(${activity.image})` }}></div>
                                        <div className='logo-container'>
                                            <h1>{activity.title}</h1>
                                            <picture className='bg-image'>
                                                <img src={activity.logo} alt={activity.logo} />
                                            </picture>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                <div className="navigation-buttons">
                    <button className='prev-angle' onClick={handlePrev} disabled={currentIndex === 0}>
                    <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button className='next-angle' onClick={handleNext} disabled={currentIndex >= adventure.length - 4}>
                    <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}

export default OurWork;
