import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Large,
  FooterContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width='25px' height='25px' />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify='space-between'>
            <Col lg={4} md={12} sm={12} xs={12}>
              <Title>Support</Title>
              <Large left='true' to='/'>
                Support Center
              </Large>
              <Large left='true' to='/'>
                Customer Support
              </Large>
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
              <Title>Policy</Title>
              <Large to='/' left='true'>
                Application Security
              </Large>
              <Large left='true' to='/'>
                Software Principles
              </Large>
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
              <Title>About Us</Title>
              <Large to='/' left='true'>
                Our Team
              </Large>
              <Large left='true' to='/'>
                Address
              </Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify='space-between'
            align='middle'
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to='/'>
              <LogoContainer>
                <SvgIcon
                  src='logo.svg'
                  aria-label='homepage'
                  width='140px'
                  height='64px'
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href='https://github.com/Asthenosphere/landing-page'
                src='github.svg'
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
