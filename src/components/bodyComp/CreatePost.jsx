import React, { useState } from "react";
import Avatar from "../headerComp/images/avatar.png";
import CreatePopup from "./CreatePopup";

/* component which displays popup on create post option */
function CreatePost() {

    /* when user focuses on the input field */
    const [btnPopup, setPopupBtn] = useState(false);

    return (
        <>
            <div className="post-section">
                <div className="upper">
                    <div>
                        <img src={Avatar} alt="profile" />
                    </div>
                    <div>
                        <input type="text" placeholder="What do you want to ask or share" onFocus={() => setPopupBtn(true)} />
                    </div>
                </div>
                <div className="lower">
                    <div className="part">
                        <button type="button" className="creat-post-icons" onClick={() => setPopupBtn(true)}>
                            <i className="bi bi-question-diamond"></i>
                            <span>Ask</span>
                        </button>
                    </div>
                    <div className="divider">
                        <span>|</span>
                    </div>
                    <div className="part">
                        <button type="button" className="creat-post-icons">
                            <i className="bi bi-pencil-square"></i>
                            <span>Answer</span>
                        </button>
                    </div>
                    <div className="divider">
                        <span>|</span>
                    </div>
                    <div className="part">
                        <button type="button" className="creat-post-icons" onClick={() => setPopupBtn(true)}>
                            <i className="bi bi-pen"></i>
                            <span>Post</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* popup triggered & closed*/}
            <CreatePopup poppedup={btnPopup} popclosed={() => setPopupBtn(false)} />
        </>
    );
}

export default CreatePost;