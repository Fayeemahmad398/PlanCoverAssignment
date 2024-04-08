/* eslint-disable react/no-unknown-property */
import "../style/LandingComp.css"
import headphone from "../assets/images/mobileimg.png";
function LandingComp() {
    return (
        <div className="bg-img-box">
            <div className="navbar-near"></div>
            <img src={"https://st3.depositphotos.com/3917667/35792/i/450/depositphotos_357922502-stock-photo-young-caucasian-musicians-band-performing.jpg"} alt="" />
            <div className="img-content-box">
                <div className="content-box">
                    <h4 className="makeur-day">Make your day colorful width</h4>
                    <h1 className="application-head">This Application</h1>
                    <p className="para-lading">Lorem  adipisicing elit. Consectetur, ipsam.</p>
                    <p className="para-lading">Lorem  consectetur adipisicing elit. Consectetur, ipsam.</p>
                    <form class="row g-3">
                        <div class="col-auto">
                            <label for="inputPassword2" class="visually-hidden">Password</label>
                            <input type="password" class="form-control input-btn-form-" id="inputPassword2" placeholder="Enter your email" />
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn mb-3 input-btn-form-">Free Trial</button>
                        </div>
                    </form>
                </div>
                <div className="mob-img-box">
                    <img src={headphone} alt="" />
                </div>
            </div>
        </div>
    )
}

export default LandingComp;
