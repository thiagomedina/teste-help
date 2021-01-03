import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  height: 40rem;
  border-radius: 8px;
  margin: 5px 0px;
  background: #1e1d21;
  max-width: 1100px;

  margin: 5px;
`;

export const Image = styled.div`
  overflow: hidden;
  display: flex;
  margin: 20px 10px;

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
    margin: 0px 5px;
  }

  p {
    color: #04d361;
    font-size: 1.5rem;
    margin: 5px;
  }
`;
