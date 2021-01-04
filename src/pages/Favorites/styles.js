import styled from 'styled-components';

export const Header = styled.header`
  padding: 30px 0;
  background: #28262e;
  display: flex;
  align-items: flex-start;

  svg {
    justify-content: flex-start;
    height: 25px;
    width: 25px;
    color: #ccc;
    margin-left: 5px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
