import styled from "styled-components";

const accentColor = "rgb(239, 41, 43)";

const Button = styled.button`
  align-items: center;
  background-color: ${(props) =>
    props.variant === "primary" ? accentColor : "white"};
  border-radius: 9999px;
  border-style: solid;
  border-width: 3px;
  margin-left: 20px;
  color: ${(props) => (props.variant === "primary" ? "white" : accentColor)};
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-weight: bold;
  min-height: 36px;
  justify-content: center;
  min-width: 72px;
  outline-style: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: 0 30px;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary"
        ? "rgb(26, 145, 53)"
        : "rgba(26, 145, 53, 0.1)"};
  }
`;

export default Button;
