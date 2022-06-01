import React from 'react';
import { Container, Img } from './styles';

export function Logo() {
  return (
    <Container>
      <Img src={require('../../../assets/logo-n1.png')} />
    </Container>
  );
}

export default Logo;
