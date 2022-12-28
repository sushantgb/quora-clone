import React from "react";
import "../stylings/styleHeader.css";
import WebLogo from "./headerComp/WebLogo";
import HeaderIcons from "./headerComp/HeaderIcons";
import Search from "./headerComp/Search";
import TryBtn from "./headerComp/TryBtn";
import ProfileIcons from "./headerComp/ProfileIcon";
import QuestBtn from "./headerComp/QuestBtn";

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


/* 
change state icons when hover

home: <i class="bi bi-house-fill"></i>
following: <i class="bi bi-filter-square-fill"></i>

instead of changing the icon we can also change the background color which will be more suitable option


*/