import Header from "./components/header"
import Main from "./components/div-main";
import Clients from "./components/clients";
import Community from "./components/community";
import UnlockPixelgrade from "./components/unlock-pixelgrade";
import Achievements from "./components/achievements";
import UnlockDesign from "./components/unlock-design";
import Customers from "./components/customer's";
import CommunityUpdates from "./components/community-updates";
import Footer from "./components/footer";
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default function App() {

  return (
    <div className="w-full overflow-hidden">
      <Header/>
      <Main/>
      <Clients/>
      <Community/>
      <UnlockPixelgrade/>
      <Achievements/>
      <UnlockDesign/>
      <Customers/>
      <CommunityUpdates/>
      <Footer/>
    </div>
  );
}