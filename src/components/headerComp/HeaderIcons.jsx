import React from "react";
import { NavLink } from "react-router-dom";

function HeaderIcons() {

    /* active link class */
    const activeClass = ({isActive}) => (isActive ? "active" : "navlinks")
    return (
        <>
            <div className="header-icons">
                <NavLink to='/' title="Home" className={activeClass}>
                    <i class="bi bi-house"></i>
                </NavLink>
                <NavLink to='/following' title="Following" className={activeClass}>
                    <i class="bi bi-filter-square"></i>
                </NavLink>
                <NavLink to='/answers' title="Answers" className={activeClass}>
                    <i class="bi bi-pencil-square"></i>
                </NavLink>
                <NavLink to='/spaces' title="Spaces" className={activeClass}>
                    <i class="bi bi-people"></i>
                </NavLink>
                <NavLink to='/notifications' title="Notifications" className={activeClass}>
                    <i class="bi bi-bell"></i>
                </NavLink>
            </div>
        </>
    );
}

export default HeaderIcons;