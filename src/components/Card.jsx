/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import "../style/card.css"

function Card({ info }) {
    let points = info.points
    return (

        <div class="card-body">
            <h5 class="card-title">{info.level}</h5>
            <p class="card-text">{info.price}</p>
            <p class="card-tex">{info.access}</p>
            {
                points.map((point) =>
                    <div className="each-point-hr">
                        <p>{point}</p>
                        <hr />
                    </div>
                )
            }

            <a href="#" class="btn btn-primary membership-btn">Change Plan</a>
        </div>
    )
}

export default Card
