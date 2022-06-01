import React from 'react';
import {
  Container,
  P,
  Square,
  Div,
  ShopDiv,
  P2,
  P3,
  Span,
  Text,
} from './styles';
import { Card } from '../../atoms/';
import ShopItems from '../../atoms/ShopItems';

function ContrastCard() {
  return (
    <React.Fragment>
      <Container>
        <Div>
          <Card />
          <Text>
            <P2>MORTAL KOMBAT</P2>
            <P3>R$ 299,⁹⁹</P3>
            <Span>
              Mussum ipsum, cacilds vidis litro abertis. Atirei o pau
              no gatis, per gatis num morreus. Preasent vel viverra
              nissi. Mauris aliquet nunc non turpis scelerisque, eget.
            </Span>
          </Text>
        </Div>
        <P>
          <Square />
          Produtos em Destaque
        </P>
        <ShopDiv>
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
        </ShopDiv>
      </Container>
    </React.Fragment>
  );
}

export default ContrastCard;
