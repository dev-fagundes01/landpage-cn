import Header from "./components/header";
import Main from "./components/div-main";
import Clients from "./components/clients";
import Community from "./components/community";
import UnlockPixelgrade from "./components/unlock-pixelgrade";
import Achievements from "./components/achievements";
import UnlockDesign from "./components/unlock-design";
import Customers from "./components/customer's";
import CommunityUpdates from "./components/community-updates";
import Footer from "./components/footer";
import { Container } from "../styles/container";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
  const el = useRef()
  const tl = useRef()

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".content-clients",
          scrub: true,
          markers: true,
          start: "top 880rem",
          end: "top 0rem"
        }
      })
      .fromTo("#h2-clients", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#p-clients", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
      .fromTo("#div-clients", {
        opacity: 0,
        x: -1000,
      }, {
        opacity: 1,
        x: 0
      })
    }, el)

    return () => {
      gsap.killTweensOf(".content-clients")
    };
  }, []);

  return (
    <Container className="w-full overflow-hidden">
      <Header />
      <Main />
      <Clients el={el} tl={tl}/>
      <Community />
      <UnlockPixelgrade />
      <Achievements />
      <UnlockDesign />
      <Customers />
      <CommunityUpdates />
      <Footer />
    </Container>
  );
}
