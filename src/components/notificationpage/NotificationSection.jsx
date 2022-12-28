import React from 'react';
import MessageList from './MessageList';
import NotificationFilterBtn from '../../data/NotificationFilterBtn';

function NotificationSection(props) {
    return (
        <div className='notification-div'>
            <div className='filters-notices'>
                <div>
                    <h5>Filters</h5>
                    <hr />
                </div>
                <div className='filters-list'>
                    {NotificationFilterBtn.map((val) => {
                        const {key, name} = val;
                        return (
                            <button key={key}>{name}</button>     
                        )
                    })}
                </div>
            </div>
            <div className='messages-section'>
                <div>
                    <h5>Notifications</h5>
                    <hr />
                </div>
                <div className='message-list'>
                    <MessageList />
                </div>
            </div>
        </div>
    )
}

export default NotificationSection;
