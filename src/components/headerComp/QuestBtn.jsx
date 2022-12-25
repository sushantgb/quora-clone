import React from "react"

function QuestBtn() {
    return (
        <>
            <div className="quest-button">
                <button type="button" id="questBtn">Ask Question</button>
                <button type="button" id="dropBtn"><i class="bi bi-chevron-down"></i></button>
            </div>
        </>
    );
}

export default QuestBtn;
