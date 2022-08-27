import React, { useState, useEffect } from 'react';
import slides from './slides-data';

const Slides = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const autoScroll = true;
  let slideInterval;

  // initialize functions to update the current slide to the next slide or previous in the array
  const nextSlide = () => {
    (currentSlide === slides.length - 1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1));
  };
  const prevSlide = () => {
    (currentSlide === 0 ? setCurrentSlide(slides.length - 1) : setCurrentSlide(currentSlide - 1));
  };

  // initialize an auto scroll function that will set the current interval based on the current slide's duration property
  const auto = () => {
    slideInterval = setInterval(nextSlide, slides[currentSlide].duration);
  };

  // effect to run on component mount that will reset the slide interval whenever the currentslide changes
  // also used to toggle auto scroll if not needed by setting autoScroll to false
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      {slides.map((slide, index) => {
        return (
          <div className={index === currentSlide ? "slide current" : "slide"} key={`slide-${index}`}>
            {index === currentSlide && (
              <div>
              {console.log(slide, 'slide')}
                {slide.type === "image" && <img src={slide.data} alt="slide" className="media"/>}
                {slide.type === "video" && <video controls width="100%" loop autoPlay muted>
                  <source src={slide.data} type="video/mp4" alt="slide" className="media"/>
                </video>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slides;