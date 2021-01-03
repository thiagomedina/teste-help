import styled from 'styled-components';
import { Button as PlayButton } from '../PlayButton/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  border-radius: 8px;
  margin: 5px 0px;
  background: #1e1d21;

  max-width: 1100px;
`;

export const Image = styled.div`
  overflow: hidden;
  display: flex;
  margin: 0px 10px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  span {
    font-weight: 700;
  }

  p {
    color: #04d361;
    font-size: 1.3rem;
    margin: 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 20px;
  align-items: center;

  ${PlayButton} {
    margin: 0px 10px;
  }
`;
