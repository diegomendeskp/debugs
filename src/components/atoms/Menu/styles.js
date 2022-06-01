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
  cursor: pointer;
  &:hover + Div {
    display: flex;
  }
`;
export const Div = styled.div`
  display: none;
  margin-top: 40px;
  padding: 23px;
  text-align: left;
  position: absolute;
  background: #084154;
  box-shadow: 7px 7px 0px #3ec6e0;
  border: 2px solid #3ec6e0;
  min-width: 160px;
  z-index: 1;
  &:hover {
    display: flex;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0px 16px;
  text-align: left;
  display: block;

  li:not(:first-child) {
    margin-top: 6px;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 13px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Span = styled.span`
  color: white;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
`;
