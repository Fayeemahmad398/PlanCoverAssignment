import { FaApple, FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
/* eslint-disable react/no-unknown-property */
import ReusableComp from "./ReusableComp"
import "../style/footer.css"
import FooterPart from "./FooterPart"
import { IoLogoWindows } from "react-icons/io5"
function Subscribe() {
    return (
        <div className="subscribe-footer">
            <div className="subscribe-section">
                <div className="subscribe-box">
                </div>
                <ReusableComp heading={"Subscribe to our Newsletter"} />
                <form action="">
                    <form class="row g-3">
                        <div class="col-auto">
                            <label for="inputPassword2" class="visually-hidden">Password</label>
                            <input type="password" class="form-control input-btn-form-" id="inputPassword2" placeholder="Enter your email" />
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn mb-3 input-btn-form-">
                                Subscribe</button>
                        </div>
                    </form>

                </form>
            </div>
            <div className="footer-lower-part">
                <FooterPart />
                <FooterPart />
                <div className="right-box-footer">
                    <div className="window-sec">
                        <div>
                            Download app from
                        </div>
                        <IoLogoWindows style={{ fontSize: "22px" }} />
                    </div>
                    <div className="footer-lower-box">
                        <div>Follow us on </div>
                        <div>
                            <FaFacebook style={{ margin: "3px", fontSize: "22px", color: "rgb(239 68 68)" }} />
                            <FaInstagram style={{ margin: "3px", fontSize: "22px", color: "rgb(239 68 68)" }} />
                            <FaTwitterSquare style={{ margin: "3px", fontSize: "22px", color: "rgb(239 68 68)" }} />
                        </div>
                    </div>

                </div>
                <div className="right-box-footer">
                    <div className="window-sec">
                        <div>
                            Download app from
                        </div>
                        <FaApple style={{ fontSize: "22px" }} />                    </div>
                    <div className="footer-lower-box">
                        <div>Support :24/7 </div>
                        <div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="copy-right">&copy;Copyright music app design. All rights reserved.</div>
        </div>
    )
}


import { FaAppleAlt } from "react-icons/fa";
<FaAppleAlt />
export default Subscribe
