import Header from "./components/header"
import Main from "./components/main";
import Clients from "./components/clients";
import Community from "./components/community";
import UnlockPixelgrade from "./components/unlock-pixelgrade";
import Achievements from "./components/achievements";
import UnlockDesign from "./components/unlock-design";
import Customers from "./components/customer's";
import CommunityUpdates from "./components/community-updates";
import Footer from "./components/footer";
import './app.'

export default function App() {

  return (
    <div className="px-5">
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