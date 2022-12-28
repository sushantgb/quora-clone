import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function HeaderIcons() {

    /* for showing the tooltip */
    const [classActive, setClassActive] = useState("hidden");
    const [classActive2, setClassActive2] = useState("hidden");
    const [classActive3, setClassActive3] = useState("hidden");
    const [classActive4, setClassActive4] = useState("hidden");
    const [classActive5, setClassActive5] = useState("hidden");

    /* active link class */
    const activeClass = ({ isActive }) => (isActive ? "active" : "navlinks")

    return (
        <>
            <div className="header-icons">
                <NavLink to='/' className={activeClass} onMouseOver={() => setClassActive("tool")} onMouseOut={() => setClassActive("hidden")}>
                    <i class="bi bi-house"></i>
                    <div className={classActive}>
                        <span>Home</span>
                    </div>
                </NavLink>
                <NavLink to='/following' className={activeClass} onMouseOver={() => setClassActive2("tool2")} onMouseOut={() => setClassActive2("hidden")}>
                    <i class="bi bi-filter-square"></i>
                    <div className={classActive2}>
                        <span>Following</span>
                    </div>
                </NavLink>
                <NavLink to='/answers' className={activeClass} onMouseOver={() => setClassActive3("tool3")} onMouseOut={() => setClassActive3("hidden")}>
                    <i class="bi bi-pencil-square"></i>
                    <div className={classActive3}>
                        <span>Answers</span>
                    </div>
                </NavLink>
                <NavLink to='/spaces' className={activeClass} onMouseOver={() => setClassActive4("tool4")} onMouseOut={() => setClassActive4("hidden")}>
                    <i class="bi bi-people"></i>
                    <div className={classActive4}>
                        <span>Spaces</span>
                    </div>
                </NavLink>
                <NavLink to='/notifications' className={activeClass} onMouseOver={() => setClassActive5("tool5")} onMouseOut={() => setClassActive5("hidden")}>
                    <i class="bi bi-bell"></i>
                    <div className={classActive5}>
                        <span>Notifications</span>
                    </div>
                </NavLink>
            </div>
        </>
    );
}

export default HeaderIcons;