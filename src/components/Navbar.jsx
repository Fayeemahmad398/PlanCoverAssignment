/* eslint-disable react/jsx-key */
import "../style/navbar.css"
/* eslint-disable react/no-unknown-property */
import musicLogo from "../assets/images/musicimg.jpg"

import Links from "./Links";

function Navbar() {
    const navbarData = [
        { Link: "Home", Id: "home-page" },
        { Link: "Features", Id: "features-section" },
        { Link: "How It Works", Id: "how-it-works-section" },
        { Link: "Screen Shots", Id: "screenshots-section" },
        { Link: "Pricing", Id: "price-section" }
    ];


    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={musicLogo} alt="" />
                        <span>
                            gana.com
                        </span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form class="d-flex">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                    navbarData.map((linkInfo) =>
                                        <Links key={linkInfo.Id} Link={linkInfo.Link} Id={linkInfo.Id} />
                                    )
                                }
                                <button class="btn btn-outline" type="submit">Download</button>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
