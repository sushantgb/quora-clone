import React from 'react';
import NotificationData from '../../data/NotificationData';

function MessageComp() {
    return (
        <div>
            {NotificationData.map((val) => {
                const { key, icon, title, time, message, details, category } = val;
                return (
                    <div className='message-card' key={key}>
                        <div className='message-icon'>
                            <img alt='icons of message' src={icon} />
                        </div>
                        <div className='message-details'>
                            <div className='message-head'>
                                <span>{title} - {time}</span>
                            </div>
                            <div className='message-bold'>
                                <span><strong>{message}</strong></span>
                            </div>
                            <div className='message-details'>
                                <span>{details}</span>
                            </div>
                            <div className='hidden-category'>
                                <span>{category}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MessageComp;
