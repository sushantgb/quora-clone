import React from "react";

function HeaderIcons() {
    return (
        <>
            <div className="header-icons">
                <a href="#home" title="Home">
                    <i class="bi bi-house"></i>
                </a>
                <a href="#home" title="Following">
                    <i class="bi bi-filter-square"></i>
                </a>
                <a href="#home" title="Answers">
                    <i class="bi bi-pencil-square"></i>
                </a>
                <a href="#home" title="Spaces">
                    <i class="bi bi-people"></i>
                </a>
                <a href="#home" title="Notifications">
                    <i class="bi bi-bell"></i>
                </a>
            </div>
        </>
    );
}

export default HeaderIcons;