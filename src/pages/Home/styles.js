import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  max-width: 31rem;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 1.2rem;
  @media (max-width: 750px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Input = styled.input`
  border-radius: 0.8rem;
  border: 1px solid #d2dae2;
  background-color: #fff;
  padding: 0.8rem 1.2rem;
  outline: none;
  width: 100%;
`;

export const InputLabel = styled.label`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;

  span {
    color: #ef4f45;
    font-weight: bold;
  }

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;
