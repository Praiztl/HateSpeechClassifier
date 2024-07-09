import React, { useState, useEffect } from 'react';
import './About.css';
import about1 from '../../assets/img/about1.png';
import about2 from '../../assets/img/about2.png';
import about3 from '../../assets/img/about3.png';
import about4 from '../../assets/img/about4.png';
import about5 from '../../assets/img/about5.png';

const slides = [
  {
    id: 1,
    title: 'Freedom of speech is important, but it doesn’t extend to hate speech. So, what is hate speech?',
    imgSrc: about1
  },
  {
    id: 2,
    title: 'Hate speech is any communication that targets individuals or groups based on attributes like race, gender, and religion, among others.',
    imgSrc: about2
  },
  {
    id: 3,
    title: 'The fight against hate speech is long and hard. But we can speed it up by educating one another — by promoting respect for diversity.',
    imgSrc: about3
  },
  {
    id: 4,
    title: 'Hate speech can take different forms, like using derogatory language, spreading false stereotypes and promoting violence against such people and groups.',
    imgSrc: about4
  },
  {
    id: 5,
    title: 'Hate speech has a lot of negative effects on the victims, such as individual harm, social division and, in extreme cases, incitement to violence.',
    imgSrc: about5
  },
  // Add more slides as needed
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const renderSlides = () => {
    return slides.map((slide, index) => (
      <div
        key={index}
        className={`slide ${index === currentIndex ? 'active' : ''}`}
        style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
      >
        <div className="card">
          <img className="card-image" src={slide.imgSrc} alt={`Slide ${index + 1}`} />
          <div className="card-body">
            <p className="card-text">{slide.title}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="About mt-3">
      <h2 className="text-center my-4">What is hate speech?</h2>
      <div className="slider-container">
        {renderSlides()}
      </div>
    </div>
  );
}

export default About;
