import React from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';

import { Container, Icon } from './styles';

export function Contact() {
  return (
    <Container>
      <Icon>
        <IoPaperPlaneOutline />
      </Icon>
      <p>Contato</p>
    </Container>
  );
}

export default Contact;
