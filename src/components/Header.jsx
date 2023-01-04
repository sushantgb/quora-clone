import React from "react";
import "../stylings/styleHeader.css";
import WebLogo from "./headerComp/WebLogo";
import HeaderIcons from "./headerComp/HeaderIcons";
import Search from "./headerComp/Search";
import TryBtn from "./headerComp/TryBtn";
import ProfileIcons from "./headerComp/ProfileIcon";
import QuestBtn from "./headerComp/QuestBtn";

/* main header component parent */
function Header() {
    return (
        <>
            {/* navigation bar */}
            <nav className="header" id="home">
                <WebLogo/>
                <HeaderIcons/>
                <Search/>
                <TryBtn/>
                <ProfileIcons/>
                <QuestBtn/>
            </nav>
        </>
    );
}

export default Header;
