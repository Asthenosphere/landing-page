import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 10rem 0 8rem;
  }
`;

export const VideoEmbed = styled("div")`
  position: relative;
  padding: 2rem 0 0rem;
  text-align: center;
  justify-content: center;
`;

export const VideoBlock = styled("div")`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
`;

export const IframeBlock = styled("iframe")`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 500;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
