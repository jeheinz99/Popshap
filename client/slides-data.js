import slide1 from './assets/slide1.mp4';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/Videowall Design.png';
2
const slides = [
  {
    type: 'video',
    data: slide1,
    duration: 40000,
  },
  {
    type: 'image',
    data: slide2,
    duration: 5000,
  },
  {
    type: 'image',
    data: slide3,
    duration: 1500,
  },
];

export default slides;