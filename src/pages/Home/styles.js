import styled from 'styled-components';
import { Container as Load } from '../../components/Loading/styles';

export const Container = styled.div`
  background-color: var(--color-background);

  ${Load} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20rem;
  }
`;
