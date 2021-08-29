import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import {
  MiddleBlockSection,
  Content,
  ContentWrapper,
  VideoBlock,
  IframeBlock,
  VideoEmbed,
} from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  id: string;
}

const MiddleBlock = ({ title, content, button, id }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  if (id === "video") {
    return (
      <VideoEmbed id={id}>
        <Fade>
          <h6>Once upon a time...</h6>
          <VideoBlock>
            <IframeBlock
              width='848'
              height='624'
              src={`https://www.youtube.com/embed/XLBZDV2S6FA`}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='Embedded youtube'
            />
          </VideoBlock>
        </Fade>
      </VideoEmbed>
    );
  }
  return (
    <MiddleBlockSection id={id}>
      <JackInTheBox>
        <Row justify='center' align='middle'>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>
                Welcome to <br /> Our Story!
              </h6>
              <Content>{content}</Content>
              {button && (
                <Button name='submit' onClick={() => scrollTo("virtual_home")}>
                  {button}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </JackInTheBox>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
