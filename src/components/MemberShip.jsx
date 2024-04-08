/* eslint-disable react/jsx-key */
import Card from "./Card"
import ReusableComp from "./ReusableComp"
import "../style/membership.css"

function MemberShip() {
    const cardsData = [
        {
            level: 'Basic', price: '$19.99', access: 'Limited', points:
                ["5 sub domain", "100GB Disk space", "24/7 tech support", "Daily backups", "Phone support"]
        },
        {
            level: 'Standard', price: '$29.99', access: 'Unlimited', points:
                ["5 sub domain", "100GB Disk space", "24/7 tech support", "Daily backups", "Phone support"]
        },
        {
            level: 'Premium', price: '$39.99', access: 'Limited', points:
                ["5 sub domain", "100GB Disk space", "24/7 tech support", "Daily backups", "Phone support"]
        }
    ];


    return (
        <div style={{ width: "80%", margin: "auto", }} id="price-section">
            <ReusableComp heading={"Membership Plan"} />
            <div className="card-box">
                {
                    cardsData.map((obj) => {
                        return <Card info={obj} />
                    })
                }
            </div>
        </div>
    )
}

export default MemberShip
