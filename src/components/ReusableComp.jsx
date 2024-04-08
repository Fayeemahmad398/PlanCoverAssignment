/* eslint-disable react/prop-types */
import "../style/resuableCom.css"

function ReusableComp({ heading }) {
    return (
        <div className="big-box-reuseable">
            <div className="reuse-box">
                <h3>{heading}</h3>
                <hr className="underline" />
                <p>Lorem ipsum dolor, sit  ,ctetur
                    
                </p>
                <p>Lorem ipsum ,   tetur
                    officia.
                </p>
            </div>

        </div>
    )
}

export default ReusableComp
