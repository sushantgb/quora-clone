import React, { useState} from "react";
import { useGlobalContext } from "../../context/Context";

function Search() {
    /* utilising the global context */
    const [contextValue, setContextValue] = useGlobalContext();
    /* state for the input field */
    const [inputState, setInputState] = useState();
    console.log("Context value: " + contextValue);

    /* function to update context */
    const SearchFunc = (e) => {
        if(e.key === "Enter"){
            let searchValue = e.target.value;
            setContextValue(searchValue.toLowerCase());
            setInputState(""); //for clearing input field on enter
        }
    }
    return (
        <>
            <div className="search-bar">
                <i class="bi bi-search"></i>
                <input 
                    type="text"
                    value= {inputState} 
                    placeholder="Search Quora"
                    onChange={(e) => setInputState(e.target.value)}
                    onKeyDown={(e) => SearchFunc(e)}
                />            
            </div>
        </>
    );
}

export default Search;