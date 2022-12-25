import React from "react";
/* import { Route, Routes } from "react-router-dom";
 */
function SpaceElement(props) {
  
    /* const redirectToFilterPage =  () => {
        window.location.href = "/filter";
    }; */
/* 
    onClick = {redirectToFilterPage} */
    return (
        <>
            <div className="space-card">
                <div className="space-icon">
                    <img src={props.iconurl} alt="space icon" />
                </div>
                <div className="space-category">
                    <button value={props.spacecategory}>{props.spacecategory}</button>
                </div>
                {/* <Routes>
                    <Route path='/filter' element={<FilterDiv />} />
                </Routes> */}
            </div>
        </>
    );
}

/* function FilterDiv(){
    return <h4>Hello it is filter</h4>
}
 */

export default SpaceElement;
