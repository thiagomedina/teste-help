import styled, { css } from 'styled-components';
export const Form = styled.form`
  max-width: 700px;
  display: flex;
  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
  }
  button {
    height: 50px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background:#039143;
    }

    svg {
      height: 25px;
      width: 25px;
      margin: 0 10px;
    }
  }
`;
