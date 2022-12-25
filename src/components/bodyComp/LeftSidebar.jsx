import React from "react";
import SpaceData from "../../data/space";
import SpaceElement from "./SpaceElement";

function LeftSidebar() {
    return (
        <>
            <div className="spaces">
                <div className="create-spaces">
                    <i class="bi bi-plus"></i>
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
                    <i class="bi bi-compass"></i>
                    <input type='text' />
                </div>
            </div>
        </>
    );
}
export default LeftSidebar;