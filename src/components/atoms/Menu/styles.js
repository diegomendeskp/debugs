import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  float: none;
`;
export const Button = styled.button`
  display: flex;
  font-size: 20px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  &:hover + Div {
    display: flex;
  }
`;
export const Div = styled.div`
  display: none;
  float: none;
  margin-top: 40px;
  padding: 5px;
  text-align: left;
  position: absolute;
  background: #084154;
  border-bottom: 7px solid #3ec6e0;
  border-right: 7px solid #3ec6e0;
  outline: 3px solid #3ec6e0;

  min-width: 160px;
  z-index: 1;

  &:hover {
    display: flex;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 12px 16px;
  text-align: left;
  display: block;
  float: none;
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 15px;
`;

export const H1 = styled.h1`
  color: white;
  text-decoration: none;
  font-size: 17px;
`;
