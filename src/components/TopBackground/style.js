import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  width: 90%;
  height: 30%;
  max-width: 50rem;
  border-radius: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
  @media (max-width: 750px) {
    border-radius: 1rem;
    height: 20%;
    width: 95%;
  }
`;
