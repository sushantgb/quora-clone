import React from "react";
// import { NavLink } from "react-router-dom";

/* question btn on the header */
function QuestBtn() {

    /* throwing alert for user to go on home page for asking question. */
    return (
        <>
            <div className="quest-button">
                <button type="button" id="questBtn" onClick={() => alert("Visit home page to ask questions")}>Ask Question</button>
                <button type="button" id="dropBtn"><i className="bi bi-chevron-down"></i></button>
            </div>
        </>
    );
}

export default QuestBtn;
