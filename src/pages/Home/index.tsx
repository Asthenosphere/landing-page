import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import VirtualHome from "../../content/VirtualHome.json";
import Timeline from "../../content/Timeline.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        id='front'
      />
      <ContentBlock
        type='right'
        title={IntroContent.title}
        content={IntroContent.text}
        icon='developer.svg'
        id='intro'
      />
      <ContentBlock
        type='left'
        title={VirtualHome.title}
        content={VirtualHome.text}
        section={VirtualHome.section}
        icon='graphs.svg'
        id='virtual_home'
      />
      <ContentBlock
        type='right'
        title={Timeline.title}
        content={Timeline.text}
        icon='product-launch.svg'
        id='timeline'
      />
      <ContentBlock
        type='left'
        title={ProductContent.title}
        content={ProductContent.text}
        icon='waving.svg'
        id='communicate'
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id='contact'
      />
    </Container>
  );
};

export default Home;
