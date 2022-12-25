import React, { useState } from "react";
import Avatar from "../headerComp/images/avatar.png";
import CreatePopup from "./CreatePopup";

function CreatePost() {

    /* when user focuses on the input field */
    const [btnPopup, setPopupBtn] = useState(false);

    return (
        <>
            <div className="post-section">
                <div className="upper">
                    <img src={Avatar} alt="profile" />
                    <input type="text" placeholder="What do you want to ask or share" onFocus={() => setPopupBtn(true)} />
                </div>
                <div className="lower">
                    <div className="part">
                        <button type="button" className="creat-post-icons" onClick={() => setPopupBtn(true)}>
                            <i class="bi bi-question-diamond"></i>
                            <span>Ask</span>
                        </button>
                    </div>
                    <div className="divider">
                        <span>|</span>
                    </div>
                    <div className="part">
                        <button type="button" className="creat-post-icons">
                            <i class="bi bi-pencil-square"></i>
                            <span>Answer</span>
                        </button>
                    </div>
                    <div className="divider">
                        <span>|</span>
                    </div>
                    <div className="part">
                        <button type="button" className="creat-post-icons" onClick={() => setPopupBtn(true)}>
                            <i class="bi bi-pen"></i>
                            <span>Post</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* popup triggered & closed*/}
            <CreatePopup poppedup = {btnPopup} popclosed = {()=> setPopupBtn(false)} />
        </>
    );
}

export default CreatePost;