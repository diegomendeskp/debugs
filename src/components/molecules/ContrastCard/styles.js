import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  gap: 30px 30px;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px 30px;
  align-content: center;
  z-index: 1;
`;

export const P = styled.p`
  align-items: flex-end;
  justify-content: flex-start;
  align-content: flex-end;
  display: flex;
  flex-direction: row;
  font-weight: bold;
  color: #084154;
`;

export const Square = styled.div`
  width: 18px;
  height: 18px;
  background: #3ec6e0;
  padding-right: 10px;
`;

export const ShopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const P2 = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

export const P3 = styled.p`
  font-weight: bold;
  font-size: 60px;
  color: #3ec6e0;
`;

export const Span = styled.span`
  font-size: 15px;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0%, -100%);
  color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 400px;
`;
