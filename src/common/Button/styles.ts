import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#AEE6E6"};
  color: ${(p) => (p.color ? "#777777" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 0px solid #aee6e6;
  border-radius: 15px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 12px rgb(23 31 114 / 15%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    background-color: #ffa45b;
  }
`;
