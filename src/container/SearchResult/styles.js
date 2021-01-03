import styled from 'styled-components';

export const ContentAlbums = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;


  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
