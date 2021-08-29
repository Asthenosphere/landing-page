import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";
import useDarkMode from "use-dark-mode";

const LeftContentBlock = ({
  icon,
  image,
  title,
  content,
  section,
  id,
}: ContentBlockProps) => {
  const darkMode = useDarkMode(false);

  return (
    <LeftContentSection id={id}>
      <Fade direction='left'>
        <Row justify='space-between' align='middle'>
          <Col lg={11} md={11} sm={12} xs={24}>
            {image ? (
              <Row justify='center'>
                <img src={image} width='135%' height='135%' alt='screenshot' />
              </Row>
            ) : (
              <SvgIcon src={icon} width='100%' height='100%' />
            )}
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
              <ServiceWrapper>
                <Row justify='space-between'>
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <MinTitle
                            style={{ color: darkMode.value ? "#fff" : "#000" }}
                          >
                            {item.title}
                          </MinTitle>
                          <MinPara>{item.content}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
