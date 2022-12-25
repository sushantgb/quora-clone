import React from "react";
import "../stylings/styleBody.css";
import LeftSidebar from "./bodyComp/LeftSidebar";
import MiddleSection from "./bodyComp/MiddleSection";
import PostFeedComp from "./bodyComp/PostFeedComp";

function BodyContent() {
    return (
        <>
            <div className="container">
                <LeftSidebar />
                <div className="middle-segment">
                    <MiddleSection />
                    <PostFeedComp />
                </div>
            </div>
        </>
    );
}

export default BodyContent;
