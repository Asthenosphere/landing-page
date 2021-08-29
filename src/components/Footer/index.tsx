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
  LargeDark,
} from "./styles";

import useDarkMode from "use-dark-mode";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {
  const darkMode = useDarkMode(false);

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        key={src}
        aria-label={src}
      >
        <SvgIcon
          src={src}
          width='25px'
          height='25px'
          color={darkMode.value ? "#ffffff" : "#000000"}
        />
      </a>
    );
  };

  const buildLinks = (content: string) => {
    return (
      <>
        {darkMode.value ? (
          <LargeDark to='/' left='true'>
            {content}
          </LargeDark>
        ) : (
          <Large to='/' left='true'>
            {content}
          </Large>
        )}
      </>
    );
  };

  return (
    <>
      <FooterSection
        style={{
          backgroundColor: darkMode.value ? "#1e1e1e" : "rgb(241, 242, 243)",
        }}
      >
        <Container>
          <Row justify='space-between'>
            <Col lg={4} md={12} sm={12} xs={12}>
              <Title>Support</Title>
              {buildLinks("Support Center")}
              {buildLinks("Customer Support")}
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
              <Title>Policy</Title>
              {buildLinks("Application Security")}
              {buildLinks("Software Principles")}
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
              <Title>About Us</Title>
              {buildLinks("Our Team")}
              {buildLinks("Address")}
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra
        style={{
          backgroundColor: darkMode.value ? "#1e1e1e" : "rgb(241, 242, 243)",
        }}
      >
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
                src={darkMode.value ? "github-dark.svg" : "github.svg"}
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
