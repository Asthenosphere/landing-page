import { lazy } from "react";
import DatesContent from "../../content/DatesContent.json";
import WelcomeContent from "../../content/WelcomeContent.json";
import VirtualHome from "../../content/VirtualHome.json";
import Timeline from "../../content/Timeline.json";
import CallContent from "../../content/CallContent.json";
import ContactContent from "../../content/ContactContent.json";

import DatesImage from "../../assets/png/dates.png";
import HomeImage from "../../assets/png/virtual_home.png";
import CallImage from "../../assets/png/call.png";
import TimelineImage from "../../assets/png/timeline.png";

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
        title={WelcomeContent.title}
        content={WelcomeContent.text}
        button={WelcomeContent.button}
        id='video'
      />
      <MiddleBlock
        title={WelcomeContent.title}
        content={WelcomeContent.text}
        button={WelcomeContent.button}
        id='front'
      />
      <ContentBlock
        type='left'
        title={VirtualHome.title}
        content={VirtualHome.text}
        section={VirtualHome.section}
        icon='graphs.svg'
        image={HomeImage}
        width='120%'
        height='120%'
        id='virtual_home'
      />
      <ContentBlock
        type='right'
        title={Timeline.title}
        content={Timeline.text}
        icon='product-launch.svg'
        image={TimelineImage}
        width='115%'
        height='115%'
        id='timeline'
      />
      <ContentBlock
        type='left'
        title={DatesContent.title}
        content={DatesContent.text}
        icon='developer.svg'
        image={DatesImage}
        width='145%'
        height='145%'
        id='intro'
      />

      <ContentBlock
        type='right'
        title={CallContent.title}
        content={CallContent.text}
        icon='waving.svg'
        image={CallImage}
        width='125%'
        height='125%'
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
