import React from 'react';
import {
  Container,
  CardItem,
  Img,
  Name,
  Price,
  Button,
} from './styles';

export function ShopItems() {
  return (
    <Container>
      <CardItem>
        <Img />
        <Name>Mussum Ipsum</Name>
        <Price>R$ 299,⁹⁹</Price>
        <Button>COMPRAR</Button>
      </CardItem>
    </Container>
  );
}

export default ShopItems;
