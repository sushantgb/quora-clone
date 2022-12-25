import React from "react";
import Avatar from "./images/avatar.png";
import Globe from "./images/globe.png";

function ProfileIcons() {
    return (
        <>
            <div className="profile-icons">
                <a href="#home">
                    <img src={Avatar} alt="Profile" />
                </a>
                <a href="#home">
                    <img src={Globe} alt="Profile" />
                </a>
            </div>
        </>
    );
}

export default ProfileIcons;