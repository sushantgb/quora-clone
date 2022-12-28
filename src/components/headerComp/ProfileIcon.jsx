import React from "react";
import Avatar from "./images/avatar.png";
import Globe from "./images/globe.png";
import { NavLink } from "react-router-dom";

function ProfileIcons() {
    return (
        /* profile button links - throwing 404 page error on it */
        <>
            <div className="profile-icons">
                <NavLink to='/empty' title="Profile">
                <img src={Avatar} alt="Profile" />
                </NavLink>
                <NavLink to='/empty' title="Public">
                <img src={Globe} alt="Public" />
                </NavLink>
            </div>
        </>
    );
}

export default ProfileIcons;