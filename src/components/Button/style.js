import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) => (props.theme === "primary" ? "none" : "solid 1px")};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "transparent"};
  color: ${(props) => (props.theme === "primary" ? "#fff" : "#68f35b")};
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 2rem;
  width: fit-content;
  border-radius: 2rem;

  &:hover {
    opacity: ${(props) => (props.theme === "primary" ? "0.8" : "0.2")};
    border-style: ${(props) => (props.theme === "primary" ? "none" : "dashed")};
  }
  &:active {
    opacity: ${(props) => (props.theme === "primary" ? "0.5" : "0.8")};
  }

  @media (max-width: 750px) {
    font-size: 0.8rem;
    padding: 0.8rem 1rem;
  }
`;
