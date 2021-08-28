import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { JackInTheBox } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

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
  return (
    <MiddleBlockSection>
      <JackInTheBox>
        <Row justify='center' align='middle' id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{title}</h6>
              <Content>{content}</Content>
              {button && (
                <Button name='submit' onClick={() => scrollTo("intro")}>
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
