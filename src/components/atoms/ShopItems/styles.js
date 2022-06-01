import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 20px;
  align-content: center;
`;
export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  max-height: 280px;
  text-align: center;
`;

export const Img = styled.div`
  display: flex;
  width: 170px;
  height: 280px;
  background-color: silver;
`;
export const Name = styled.p`
  padding-top: 10px;
  display: flex;
  color: #084154;
  font-weight: bold;
  font-size: 12px;
`;
export const Price = styled.span`
  padding: 5px 0px;
  display: flex;
  color: #084154;
  font-weight: bold;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  border-radius: 3px;
  background-color: #3ec6e0;
  color: antiquewhite;
  font-size: 13px;
  font-weight: bold;
  border: none;
  margin-bottom: 5px;
  cursor: pointer;
`;
