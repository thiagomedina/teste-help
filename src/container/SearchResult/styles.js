import styled from 'styled-components';

export const ContainerAlbums = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
