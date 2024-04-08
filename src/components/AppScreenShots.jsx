import ReusableComp from "./ReusableComp"
import multiphone from "../assets/images/multiphone.png"
import "../style/screenshots.css"
function AppScreenShots() {
    const heading = "App Screenshots"
    return (
        <div id="screenshots-section" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <ReusableComp heading={heading} />
            <div className="multiphone-box">
                <img src={multiphone} alt="" />

            </div>

        </div>
    )
}

export default AppScreenShots
