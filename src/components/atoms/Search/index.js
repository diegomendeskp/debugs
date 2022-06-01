import React from 'react';
import { Container, Icon } from './styles';
import { BsSearch } from 'react-icons/bs';

export function Search() {
  return (
    <Container>
      <Icon>
        <BsSearch />
      </Icon>
      <p>Busca</p>
    </Container>
  );
}

export default Search;
