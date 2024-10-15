import styled, { css } from "styled-components";

export default styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  font-family: var(--font-roboto);
  /* background-color: var(--primary-color); */

  background-color: ${(props) =>
    props.$color === "danger" ? "var(--color-danger)" : "var(--primary-color)"};

  ${(props) =>
    props.$variant === "text" &&
    css`
      background-color: transparent;
      color: var(--primary-color);
      border: none;
    `}

  ${(props) =>
    props.$variant === "outlined" &&
    css`
      background-color: transparent;
      color: var(--primary-color);
      border: solid 2px var(--primary-color);
    `};

  ${(props) =>
    props.$variant === "contained" &&
    css`
      background-color: var(--primary-color);
      color: white;
    `};

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;
