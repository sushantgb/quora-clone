import React from 'react';
import QuestionFeed from '../../data/Rightbarfeed';
import FollowCard from './FollowCard';

/* right side bar for dummy follow spaces options */
function RightSideBar() {
    return (
        <div className='right-bar'>
            <div className='follow-feed-head'>
                <h4>Spaces to follow</h4>
            </div>
            <div className='follow-cards-data'>

            {
                QuestionFeed.map((val) => {
                    return (
                        <FollowCard
                            key={val.key}
                            name={val.name}
                            icon={val.icon}
                            about={val.about}
                        />
                    )
                })
            }

            </div>
        </div>
    )
}

export default RightSideBar
