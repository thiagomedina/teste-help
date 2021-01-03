import styled from 'styled-components';
import { Form as Search } from '../Search/styles';

export const Container = styled.header`
  padding: 30px 0;
  background: #28262e;
  display: flex;
  align-items: center;

  ${Search} {
    margin: 0px 20px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const Favorites = styled.button`
  margin-right: 60px;
  background: none;
  border: 0;
  color: #cccccc;
  align-items: center;
  font-weight: 600;
  margin-left: auto;
  svg {
    margin-left: 5px;
    height: 20px;
    width: 20px;
  }

  &:hover {
    color: #fff;
  }

  @media (max-width: 800px) {
    margin: 15px 8px -15px auto;
  }
`;
