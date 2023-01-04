import React from "react";
import SpaceData from "../../data/SpacesData";
import SpaceElement from "./SpaceElement";

/* left sidebar which has spaces filter */
function LeftSidebar() {
    return (
        <>
            <div className="spaces">
                <div className="create-spaces">
                    <i className="bi bi-plus"></i>
                    <input type='text' />
                </div>
                <div className="spaces-list">
                    {SpaceData.map((val) => {
                        return (
                            <SpaceElement
                                key={val.key}
                                iconurl={val.iconurl}
                                spacecategory={val.spacecategory}
                            />
                        )
                    })
                    }
                </div>
                <div className="discover-spaces">
                    <i className="bi bi-compass"></i>
                    <input type='text' />
                </div>
            </div>
        </>
    );
}
export default LeftSidebar;