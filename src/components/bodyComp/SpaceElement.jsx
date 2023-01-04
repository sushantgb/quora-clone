import React from "react";
import { useGlobalContext } from "../../context/Context";

/* space filters component */
function SpaceElement(props) {
    /* utilising and updating context */
    const [contextValue, setContextValue] = useGlobalContext();

    /* function to update context */
    const FilterFunc = (e) => {
        const btnValue = e.target.value.toLowerCase();
        console.log(btnValue);
        setContextValue(btnValue);
        console.log(contextValue);
    }

    return (
        <>
            <div className="space-card">
                <div className="space-icon">
                    <img src={props.iconurl} alt="space icon" />
                </div>
                <div className="space-category">
                    <button 
                        value={props.spacecategory}
                        onClick={(e) => FilterFunc(e) }
                        >{props.spacecategory}</button>
                </div>
            </div>
        </>
    );
}

export default SpaceElement;
