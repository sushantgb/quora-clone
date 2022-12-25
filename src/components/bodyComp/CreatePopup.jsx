import React, { useState } from 'react';
import AddQuest from './AddQuest';

function CreatePopup(props) {

    const [tabSelection, setTabSelection] = useState(true);
    let buttonText;
    /* style of the active tab */
    let lineStyle, lineStyle2;
    /* for changing the submit button text */
    if(tabSelection){
        buttonText = "Add Question";
    }else{
        buttonText = "Post"
    }
    /* condition for activing the style for active tab */
    if(tabSelection){
        lineStyle = {
            borderBottom: "solid blue thin"
        }
    }else{
        lineStyle2 = {
            borderBottom: "solid blue thin"
        }
    }

    /* dummy alert on pressing submit button to publish */
    function Submission(){
        alert("Your entry is published !");
    }

    return (props.poppedup) ? (
        <div className='post-popup'>
            <div className='inner-content'>
                <div className='popper-head'>
                    <button className='close-popup' onClick={props.popclosed}><i class="bi bi-x-lg"></i></button>
                </div>
                <div className='tabs-nav'>
                    <div id='ask-quest' onClick={() => setTabSelection(true)}>
                        <button style={lineStyle}>Add Question</button>
                    </div>
                    <div id='create-post' onClick={() => setTabSelection(false)}>
                        <button style={lineStyle2}>Create Post</button>
                    </div>
                </div>
                <AddQuest addquesttab={tabSelection} />
                <div className='foot-buttons'>
                    <button id='cancelFoot' onClick={props.popclosed}>Cancel</button>
                    <form onSubmit={props.popclosed}>
                        <button type='submit' id='submitFoot' onClick={Submission}>{buttonText}</button>
                    </form>
                </div>
            </div>
        </div>
    ) : "";
}

export default CreatePopup;
