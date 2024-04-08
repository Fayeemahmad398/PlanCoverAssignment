import { FaHeart } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import "../style/feature.css"
import { FaLeaf } from "react-icons/fa";
import ReusableComp from "./ReusableComp.jsx";
const heading = "Awesome Apps Features";
function AppFeature() {
    return (
        <div id="features-section">
            <ReusableComp heading={heading} />
            <div className="actions features">
                <div className="oneAction">
                    <FaLeaf className="icons-actions" />
                    <div className="counts">
                        CREATIVE DESIGN
                    </div>
                    <div className="acions-type">Lorem dolor sit amet
                        
                        elit.
                    </div>
                    <div className="acions-type">
                        adipisicing
                        Fug iores!</div>
                </div>
                <div className="oneAction">
                    <FaHeart className="icons-actions dil" />
                    <div className="counts">
                        LOVELY APP
                    </div>
                    <div className="acions-type">Lorem dolor sit amet
                        
                        
                    </div>
                    <div className="acions-type">
                        sicing
                        Fugiat, asper iores!</div>
                </div>
                <div className="oneAction full-width-last-child">
                    <IoSettings className="icons-actions" />
                    <div className="counts">
                        EASY CUSTOMIZE
                    </div>
                    <div className="acions-type">Lorem dolor sit amet
                        
                        elit.
                    </div>
                    <div className="acions-type">
                        sicing
                        Fugiat, asper iores!</div>
                </div>

            </div>

        </div>
    )
}

export default AppFeature
