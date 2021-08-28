import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import Container from "../../common/Container";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
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
        <CustomNavLinkSmall onClick={() => scrollTo("intro")}>
          <Span>Dates</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("virtual_home")}>
          <Span>Virtual Home</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("timeline")}>
          <Span>Timeline</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("communicate")}>
          <Span>Communication</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <Span>Contact</Span>
        </CustomNavLinkSmall>
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
          <NotHidden>
            <MenuItem />
          </NotHidden>
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
          <Row justify='center'>
            <Col style={{ marginBottom: "2.5rem" }}>
              <Menu>Menu</Menu>
            </Col>
          </Row>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
