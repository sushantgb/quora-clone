import React, { useEffect, useState } from 'react';
import MessageComp from './MessageComp';
import NotificationData from '../../data/NotificationData';
import { BsBellSlashFill } from "react-icons/bs";
import NotificationFiltersData from '../../data/NotificationFiltersData';
import NotificationFilter from './NotificationFilter';
import { useGlobalContext } from '../../context/Context';

/* notification section which holds all the notifications */
function NotificationSection() {
    /* context utilisation */
    const contextValue2 = useGlobalContext();
    /* state of notifications */
    const [notice, setNotice] = useState(NotificationData);
    /* state of div when there is no notification in the filter */
    const [noNoticeDiv, setNoNoticeDiv] = useState("notice-hidden");
    
    /* to filter and change state of notifications */
    useEffect(()=>{
        /* default value */
        if(contextValue2[0] === "All" || contextValue2[0] === "all"){
            setNotice(NotificationData);
            setNoNoticeDiv("notice-hidden");
        }else{
            /* updates on clicking the filters */
            const updater = NotificationData.filter((val) => {
                return (
                    val.category.toLowerCase() === contextValue2[0] ||
                    val.title.toLowerCase().includes(contextValue2[0]) ||
                    val.message.toLowerCase().includes(contextValue2[0]) ||
                    val.details.toLowerCase().includes(contextValue2[0])    
                );
            })
            /* when notification is empty */
            if(!updater.length){
                setNoNoticeDiv("no-notification");
            }else{
                setNoNoticeDiv("notice-hidden");
            }
            setNotice(updater);
        }
    }, [contextValue2])
    
    return (
        <div className='notification-div'>
            {/* notification buttons */}
            <div className='filters-notices'>
                <div className='notice-head-div'>
                    <span className='notice-head'>Filters</span>
                </div>
                <div className='filters-list'>
                    {
                        NotificationFiltersData.map((val) => {
                            return(
                                <NotificationFilter 
                                    key={val.key}
                                    btnvalue={val.btnvalue}
                                />
                            )
                        })
                    }    
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
                    {/* div when no notification is present in the filter category */ }
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
