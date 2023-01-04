import React from "react";

/* dummy try quora+ button */
function TryBtn() {
    return (
        <>
            <div className="try-button">
                <button type="button" id="tryBtn" onClick={() => alert("This is a Dummy Button")}>Try Quora+</button>
            </div>
        </>
    );
}

export default TryBtn;