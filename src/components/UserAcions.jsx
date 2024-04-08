import { AiFillLike } from "react-icons/ai";
import { GoCodeReview } from "react-icons/go";
import { FaDownload } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import "../style/actions.css"

function UserActions() {
    return (
        <div className="actions-box">
            <div className="oneAction">
                <FaUsers className="icons-actions" />
                <div className="counts">
                    6745+
                </div>
                <div className="acions-type">users</div>
            </div>
            <div className="oneAction">
                <FaDownload className="icons-actions" />
                <div className="counts">
                    6745+
                </div>
                <div className="acions-type">Download</div>
            </div>
            <div className="oneAction">
                <GoCodeReview className="icons-actions" />
                <div className="counts">
                    5695+
                </div>
                <div className="acions-type">users</div>
            </div>
            <div className="oneAction">
                <AiFillLike className="icons-actions" />
                <div className="counts">
                    6766+
                </div>
                <div className="acions-type">Likes</div>
            </div>
        </div>
    )
}

export default UserActions;
