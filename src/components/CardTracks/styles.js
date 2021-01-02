import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 8px;
  margin: 2px 0px;
  background: #1e1d21;
`;

export const Image = styled.div`
  margin: 10px 20px;
  border-radius: 5px;
  overflow: hidden;

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

export const DurationTrack = styled.p`
  position: absolute;
  right: 125px;
  min-width: 45px;
  margin: 0;
  font-size: 1.3rem;
`;
