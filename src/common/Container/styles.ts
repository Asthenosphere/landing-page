import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  margin-right: auto;
  margin-left: auto;
  padding: 0 240px;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  @media only screen and (max-width: 1440px) {
    max-width: 100%;
    padding: 0 200px;
  }

  @media only screen and (max-width: 1280px) {
    max-width: 100%;
    padding: 0 160px;
  }

  @media only screen and (max-width: 1125px) {
    max-width: 100%;
    padding: 0 120px;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 0 80px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 36px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
