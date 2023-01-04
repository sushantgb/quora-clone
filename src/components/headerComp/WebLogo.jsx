import React from "react";
import logo from "./images/logo.png";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";

/* quora icon button for site identification and home button functionality */
function WebLogo() {
    /* refreshing the context and state of posts when quora icon is clicked */
    const [contextValue, setContextValue] = useGlobalContext();
    console.log(contextValue);
    return (
        <>
            <div className="websiteIdentity">
                <NavLink id="web-icon" to='/' onClick={() => setContextValue("All")}>
                    <img alt="quora icon" src={logo} />
                </NavLink>
            </div>
        </>
    );
}

export default WebLogo;