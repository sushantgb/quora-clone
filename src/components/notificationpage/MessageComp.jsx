import React from 'react';

/* ful notification card - component */
function MessageComp(props) {
    return (
        <div>
            <div className='message-card' onClick={() => alert("You Have Read The Message")}>
                <div className='message-icon'>
                    <img alt='icons of message' src={props.icon} />
                </div>
                <div className='message-details'>
                    <div className='message-head'>
                        <span>{props.title} ❱ {props.time}</span>
                    </div>
                    <div className='message-bold'>
                        <span>{props.message}</span>
                    </div>
                    <div className='message-describe'>
                        <span>{props.details}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageComp;
