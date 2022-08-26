import React, { useState, useRef, useEffect } from 'react';
import slide1 from './assets/slide1.mp4';
import slide2 from './assets/slide2.jpg';

const Slides = () => {

  const [index, setIndex] = useState(0);

  const slides = [
    {
      type: 'video',
      data: slide1,
      duration: 0,
    },
    {
      type: 'image',
      data: slide2,
      duration: 0,
    },
  ];

  const slidesArr = [];
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].type === 'video') {
      slidesArr.push(<video className="slide-media" key={`video-${i}`} id={i} src={slides[i].data} style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}/>);
    }
    else slidesArr.push(<img className="slide-media" key={`image-${i}`} id={i} src={slides[i].data} style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}/>);
  }

  return (
    <div className="slide-list">
      <div className="slide-slider">
        {slidesArr}
      </div>
    </div>
  );
};

export default Slides;

// style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}