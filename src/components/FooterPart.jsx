/* eslint-disable react/prop-types */

function FooterPart({textData,address}) {
    return (
        <div className="office-contact-box">
            <div>{textData}</div>
            <div>
                {address}
            </div>
            <div>City atlantica 3303</div>
        </div>

    )
}

export default FooterPart

