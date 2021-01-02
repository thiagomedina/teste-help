import styled from 'styled-components';
import { Form as Search } from '../Search/styles';

export const Container = styled.header`
  padding: 30px 0;
  background: #28262e;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${Search} {
    margin: auto;
  }
`;

export const Favorites = styled.button`
  margin-right: 60px;

  background: none;
  border: 0;
  color: #cccccc;
  align-items: center;
  font-weight: 600;
  svg{
    margin-left: 5px;
    height:20px;
    width: 20px;
  }

  &:hover{
    color: #fff;

  }
`;
