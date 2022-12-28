import React from "react";
import logo from "./images/logo.png";
import { NavLink } from "react-router-dom";

function WebLogo() {
    return (
        <>
            <div className="websiteIdentity">
                <NavLink id="web-icon" to='/'>
                    <img alt="quora icon" src={logo} />
                </NavLink>
            </div>
        </>
    );
}

export default WebLogo;