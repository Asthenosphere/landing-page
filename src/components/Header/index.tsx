import { useState } from "react";
import { Row, Col, Drawer, Button } from "antd";
import Container from "../../common/Container";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  BurgerDark,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Outline,
  Span,
} from "./styles";
import BookImage from "../../assets/png/book.png";
import useDarkMode from "use-dark-mode";

const Header = () => {
  const [visible, setVisibility] = useState(false);
  const darkMode = useDarkMode(false);

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
        <CustomNavLinkSmall
          onClick={() => scrollTo("intro")}
          style={{ color: darkMode.value ? "#fff" : "#000" }}
        >
          <Span>Dates</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => scrollTo("virtual_home")}
          style={{ color: darkMode.value ? "#fff" : "#000" }}
        >
          <Span>Virtual Home</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => scrollTo("timeline")}
          style={{ color: darkMode.value ? "#fff" : "#000" }}
        >
          <Span>Timeline</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => scrollTo("communicate")}
          style={{ color: darkMode.value ? "#fff" : "#000" }}
        >
          <Span>Communication</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => scrollTo("contact")}
          style={{ color: darkMode.value ? "#fff" : "#000" }}
        >
          <Span>Contact</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <Button
            shape='circle'
            type='text'
            onClick={darkMode.toggle}
            style={{
              marginLeft: "0.15rem",
              color: darkMode.value ? "#fff" : "#000",
            }}
          >
            {darkMode.value ? "☀️" : "🌙"}
          </Button>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify='space-between'>
          <LogoContainer to='/' aria-label='homepage'>
            <img src={BookImage} alt='Our Story' width='48px' height='48px' />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          {darkMode.value ? (
            <BurgerDark onClick={showDrawer}>
              <Outline />
            </BurgerDark>
          ) : (
            <Burger onClick={showDrawer}>
              <Outline />
            </Burger>
          )}
        </Row>
        <Drawer
          closable={false}
          visible={visible}
          placement='right'
          onClose={onClose}
          drawerStyle={{
            backgroundColor: darkMode.value ? "#111111" : "#fff",
          }}
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
