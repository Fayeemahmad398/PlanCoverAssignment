import LandingComp from "./components/LandingComp"
import Navbar from "./components/Navbar"
import "./App.css"
import UserAcions from "./components/UserAcions"
import AppFeature from "./components/AppFeature"
import AppScreenShots from "./components/AppScreenShots"
import OverviewComp from "./components/OverviewComp"
import MemberShip from "./components/MemberShip"
import Subscribe from "./components/Subscribe"
import HowItWorks from "./components/HowItWorks"
function App() {
  return (
    <div>
      <Navbar />
      <LandingComp />
      <UserAcions />
      <AppFeature />
      <HowItWorks />
      <AppScreenShots />
      <OverviewComp />
      <MemberShip />
      <Subscribe />

    </div>
  )
}

export default App
