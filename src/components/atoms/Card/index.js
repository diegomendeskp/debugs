import React from 'react';
import { Container, ImgCard } from './styles';

export function Card() {
  return (
    <Container>
      <ImgCard src={require('../../../assets/zelda_banner.jpg')} />
      <ImgCard src={require('../../../assets/sekiro_banner.jpg')} />
    </Container>
  );
}

export default Card;
