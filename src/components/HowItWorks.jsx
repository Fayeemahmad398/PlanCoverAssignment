import { IoCheckmarkCircleSharp } from "react-icons/io5";
import ReusableComp from "./ReusableComp"
import "../style/howitworks.css"
import mobileimg from "../assets/images/mobileimg.png"
function HowItWorks() {
    return (
        <div className="how-it-works" id="how-it-works-section">
            <ReusableComp heading={"How it works"} />
            <div className="works-box">
                <div className="works-img-box">
                    <img src={mobileimg} alt="" />
                </div>
                <div className="works-right-part">
                    <div className="type-of-works">
                        <div className="one-box-works">
                            <div className="icon-of-one-works">
                                <IoCheckmarkCircleSharp className="tick-icons" />
                            </div>
                            <div>
                                <h4>
                                    Download for free
                                </h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, obcaecati vero rem porro veniam repudiandae.</p>
                            </div>
                        </div>
                        <div className="one-box-works">
                            <div className="icon-of-one-works">
                                <IoCheckmarkCircleSharp className="tick-icons" />
                            </div>
                            <div>
                                <h4>
                                    Download for free
                                </h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, obcaecati vero rem porro veniam repudiandae.</p>
                            </div>
                        </div>
                        <div className="one-box-works">
                            <div className="icon-of-one-works">
                                <IoCheckmarkCircleSharp className="tick-icons" />
                            </div>
                            <div>
                                <h4>
                                    Download for free
                                </h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, obcaecati vero rem porro veniam repudiandae.</p>
                            </div>
                        </div>
                        <div className="one-box-works">
                            <div className="icon-of-one-works">
                                <IoCheckmarkCircleSharp className="tick-icons" />
                            </div>
                            <div>
                                <h4>
                                    Download for free
                                </h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, obcaecati vero rem porro veniam repudiandae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-floating">
            </div>
            <div className="left-floating">
            </div>

        </div>
    )
}

export default HowItWorks
