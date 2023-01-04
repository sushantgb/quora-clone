import React, { useState } from 'react';
import MessageComp from './MessageComp';
import NotificationData from '../../data/NotificationData';
import { BsBellSlashFill } from "react-icons/bs";

function NotificationSection() {
    /* state of notifications */
    const [notice, setNotice] = useState(NotificationData);
    /* state of div when there is no notification in the filter */
    const [noNoticeDiv, setNoNoticeDiv] = useState("notice-hidden");
    /* function to filter and change state of notifications */
    const FilterFunc = (name) => {
        if (name === "All Notifications") {
            setNotice(NotificationData);
            setNoNoticeDiv("notice-hidden");
        } else {
            const updater = NotificationData.filter((val) => {
                return val.category === name;
            })
            /* when notification is empty */
            if(!updater.length){
                setNoNoticeDiv("no-notification");
            }else{
                setNoNoticeDiv("notice-hidden");
            }
            setNotice(updater);
        }
    }
    return (
        <div className='notification-div'>
            {/* notification buttons */}
            <div className='filters-notices'>
                <div className='notice-head-div'>
                    <span className='notice-head'>Filters</span>
                </div>
                <div className='filters-list'>
                    <div>
                        <button onClick={() => FilterFunc("All Notifications")}>All Notifications</button>
                    </div>
                    <div>
                        <button onClick={() => FilterFunc("Stories")}>Stories</button>
                    </div>
                    <div>
                        <button onClick={() => FilterFunc("Spaces")}>Spaces</button>
                    </div>
                    <div>
                        <button onClick={() => FilterFunc("Upvotes")}>Upvotes</button>
                    </div>
                    <div>
                        <button onClick={() => FilterFunc("Your profile")}>Your profile</button>
                    </div>

                    <div>
                        <button onClick={() => FilterFunc("Questions")}>Questions</button>
                    </div>
                    <div>
                        <button onClick={() => FilterFunc("Announcements")}>Announcements</button>
                    </div>
                    <div>
                        <button onClick={() => FilterFunc("People updates")}>People updates</button>
                    </div>
                    <div>
                        <button onClick={() => FilterFunc("Comments and mentions")}>Comments and mentions</button>
                    </div>
                    <div>
                        <button onClick={() => FilterFunc("Your content")}>Your content</button>
                    </div>
                    <div>
                        <button onClick={() => FilterFunc("Subscriptions")}>Subscriptions</button>
                    </div>
                    <div>
                        <button onClick={() => FilterFunc("Earnings")}>Earnings</button>
                    </div>
                </div>
            </div>
            {/* notifications */}
            <div className='messages-section'>
                <div className='notice-head-div'>
                    <span className='notice-head'>Notifications</span>
                </div>
                <div className='message-list'>
                    {
                        notice.map((val) => {
                            return (
                                <MessageComp
                                    key={val.key}
                                    icon={val.icon}
                                    title={val.title}
                                    time={val.time}
                                    message={val.message}
                                    details={val.details}
                                    category={val.category}
                                />
                            )
                        })
                    }
                    <div className={noNoticeDiv}>
                        <span><BsBellSlashFill /></span>
                        <span>No notification here</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationSection;
