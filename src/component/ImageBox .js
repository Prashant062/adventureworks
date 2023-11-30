import React, { useState } from 'react';
import './Imagebox.css';
import Backpack from '../Assets/Backpack.jpeg';
import CampChairs from '../Assets/CampChairs.jpeg';
import Sunglasses from '../Assets/Sunglasses.jpeg';
import jackets from '../Assets/jackets.png';

const ImageBox = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    {
      id: 1,
      src: Sunglasses,
      title: 'AW Sunglasses',
      description: 'Sun protection to keep your adventures moving! All our sunglasses include scratch-resistant lenses that block 100% of harmful UV rays so you can play all day.',
      buttons: [
        { label: 'SHOP SUNGLASSES', onClick: () => handleButtonClick(1) },
      ],
    },
    {
      id: 2,
      src: Backpack,
      title: 'Backpacks',
      description: 'Field tested and designed with your most extreme adventures in mind. Our line of AW backpacks and daypacks are thoughtfully equipped with easy reach pockets to manage your gear like a pro',
      buttons: [
        { label: 'SHOP BACKPACKS', onClick: () => handleButtonClick(2) },
      ],
    },
    {
      id: 3,
      src: jackets,
      title: 'Eco-Conscious Jackets',
      description: 'Warm-up to our line of AW eco-conscious jackets. Ethically sourced down and zero temp engineered synthetic fibers warm and wick where it matters most',
      buttons: [
        { label: 'SHOP JACKETS', onClick: () => handleButtonClick(3) },
      ],
    },
    {
      id: 4,
      src: CampChairs,
      title: 'Camp Chairs',
      description: 'Light, packable, and supportive, each AW chair brings added comfort to your adventure. We offer a wide range of adventure-ready chairs, easy to clean, flame-resistant fabric and the lightest aluminum alloy frames on the market',
      buttons: [
        { label: 'SHOP CAMP CHAIRS', onClick: () => handleButtonClick(4) },
      ],
    },
  ];

  // Sort the images array based on the id, so the image with id=1 is displayed first
  const sortedImages = images.sort((a, b) => a.id - b.id);

  const handleImageHover = (index) => {
    setHoveredIndex(index);
  };

  const handleImageLeave = () => {
    setHoveredIndex(null);
  };

  const handleButtonClick = (imageId) => {
    // Handle button click based on the imageId
    console.log(`Button clicked for image ${imageId}`);
  };

  return (
    <div className="image-box">
      {sortedImages.map((image, index) => (
        <div
          key={image.id}
          className={`image-container ${hoveredIndex === index ? 'hovered' : ''}`}
          onMouseEnter={() => handleImageHover(index)}
          onMouseLeave={handleImageLeave}
        >
          <img src={image.src} alt={image.title} />
          {hoveredIndex === index && (
            <div className="image-details">
              <h1>{image.title}</h1>
              <p>{image.description}</p>
              {image.buttons.map((button, buttonIndex) => (
                <button key={buttonIndex} onClick={button.onClick}>
                  {button.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageBox;
