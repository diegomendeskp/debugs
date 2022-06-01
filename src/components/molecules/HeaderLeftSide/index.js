import React from 'react';
import { Container } from './styles';
import { Menu, Logo } from '../../atoms';

function HeaderLeftSide() {
  return (
    <Container>
      <React.Fragment>
        <Menu />
        <Logo />
      </React.Fragment>
    </Container>
  );
}

export default HeaderLeftSide;
