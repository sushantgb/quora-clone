import React from "react";

function SpaceElement(props) {

    return (
        <>
            <div className="space-card">
                <div className="space-icon">
                    <img src={props.iconurl} alt="space icon" />
                </div>
                <div className="space-category">
                    <button value={props.spacecategory}>{props.spacecategory}</button>
                </div>
            </div>
        </>
    );
}

export default SpaceElement;
