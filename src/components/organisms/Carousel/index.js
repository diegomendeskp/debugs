import React from 'react';
import { Fade } from 'react-slideshow-image';
import image1 from '../../../assets/principal_banner_desktop.jpg';
import image2 from '../../../assets/principal_banner_desktop_02.jpg';
import { Container, Img } from './styles';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [image1, image2];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

function Carousel() {
  return (
    <Container>
      <Fade>
        <div className="each-fade">
          <Img src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <Img src={fadeImages[1]} />
        </div>
      </Fade>
    </Container>
  );
}

export default Carousel;
