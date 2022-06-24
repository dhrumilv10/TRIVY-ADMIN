import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';

const HomeCarousel = () => {
  return (
    <Carousel pause={false} controls={false} indicators={false} className="mt-5">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 vh-50"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Villas.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 vh-50"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Events.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 vh-50"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Culinary.</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarousel;