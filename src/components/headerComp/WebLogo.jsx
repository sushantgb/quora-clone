import React from "react";
import logo from "./images/logo.png"

function WebLogo() {
    return (
        <>
            <div className="websiteIdentity">
                <a href="#home" id="web-icon"><img alt="quora icon" src={logo} /></a>
            </div>
        </>
    );
}

export default WebLogo;