<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

import image_2 from '../icons/image_2.png';
import image_3 from '../icons/image_3.png';
import image_4 from '../icons/image_4.png';
import image_5 from '../icons/image_5.png';
import image_6 from '../icons/image_6.png';


function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    // List of events with their details
    const events = [
        { image: image_2, title: 'Maidaan', description: 'Description of Event 1' },
        { image: image_3, title: 'Shaitaan', description: 'Description of Event 2' },
        { image: image_4, title: 'Shaanti', description: 'Description of Event 3' },
        { image: image_5, title: 'Event 4', description: 'Description of Event 4' },
        { image: image_6, title: 'Event 5', description: 'Description of Event 5' },
    ];

    useEffect(() => {
      console.log('Setting up interval...');
        const interval = setInterval(() => {
          console.log('Advancing slide...');
            setSlideIndex(prevIndex => (prevIndex + 1) % events.length);
        }, 2000);

        return () => {
          console.log('Clearing interval...');
          clearInterval(interval);
    };
  }, [events.length]);

    const prevSlide = () => {
        setSlideIndex(prevIndex => (prevIndex - 1 + events.length) % events.length);
    };

    const nextSlide = () => {
        setSlideIndex(prevIndex => (prevIndex + 1) % events.length);
    };

    return (
        <div className="slider">
            {events.map((event, index) => (
                <div key={index} className={index === slideIndex ? 'slide active' : 'slide'}>
                    <div className='event-container'>
                        <img src={event.image} alt={event.title} />
                        <div className="content">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default Slider;
=======
// Slider.js
import React, { useState, useEffect } from 'react';
import image1 from '../icons/image1.png';
import image2 from '../icons/image2.png';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add your image URLs here
  const images = [image1, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967
