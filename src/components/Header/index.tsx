import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NavLink,
  Menu,
  CustomNavLinkSmall,
  Outline,
  Span,
} from "./styles";
import BookImage from "../../assets/png/book.png";

const Header = () => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <Row justify='start'>
          <CustomNavLinkSmall onClick={() => scrollTo("intro")}>
            <Span>Dates</Span>
          </CustomNavLinkSmall>
        </Row>
        <Row justify='start'>
          <CustomNavLinkSmall onClick={() => scrollTo("virtual_home")}>
            <Span>Virtual Home</Span>
          </CustomNavLinkSmall>
        </Row>
        <Row justify='start'>
          <CustomNavLinkSmall onClick={() => scrollTo("timeline")}>
            <Span>Timeline</Span>
          </CustomNavLinkSmall>
        </Row>
        <Row justify='start'>
          <CustomNavLinkSmall onClick={() => scrollTo("communicate")}>
            <Span>Communication</Span>
          </CustomNavLinkSmall>
        </Row>
        <Row justify='start'>
          <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
            <Span>Contact</Span>
          </CustomNavLinkSmall>
        </Row>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify='space-between'>
          <LogoContainer to='/' aria-label='homepage'>
            <img src={BookImage} alt='Our Story' width='64px' height='64px' />
          </LogoContainer>
          <NavLink>
            <div>
              <SvgIcon
                src='logo.svg'
                aria-label='homepage'
                width='140px'
                height='64px'
              />
            </div>
          </NavLink>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer
          closable={false}
          visible={visible}
          placement='right'
          onClose={onClose}
        >
          <Row justify='start'>
            <Col style={{ padding: "1rem", marginBottom: "1rem" }}>
              <Menu onClick={() => setVisibility(false)}>Menu</Menu>
            </Col>
          </Row>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
