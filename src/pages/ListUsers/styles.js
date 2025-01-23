import styled from "styled-components";

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;
  margin: 2rem 0;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 1rem;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  max-width: 250rem;

  h3 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  p {
    display: flex;

    color: #fff;
    font-size: 0.9rem;
    font-weight: 200;
  }
  @media (max-width: 750px) {
    justify-content: space-evenly;
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 1.8rem;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
  @media (max-width: 750px) {
    height: 1.3rem;
  }
`;

export const AvatarUsers = styled.img`
  height: 4.5rem;

  @media (max-width: 750px) {
    height: 3.5rem;
  }
`;
