/* eslint-disable react/prop-types */
import "../style/resuableCom.css"

function ReusableComp({ heading }) {
    return (
        <div className="big-box-reuseable">
            <div className="reuse-box">
                <h3>{heading}</h3>
                <hr className="underline" />
                <p>Lorem ipsum dolor, sit  ,conse ctetur
                    officia.
                </p>
                <p>Lorem ipsum ,  sec tetur
                    officia.
                </p>
            </div>

        </div>
    )
}

export default ReusableComp
