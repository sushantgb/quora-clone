import React from 'react';

function FollowCard(props) {
  return (
    <div>
        <div className="follow-cards">
            <div className='follow-icons'>
                <img src={props.icon} alt="space logo"/>
            </div>
            <div className='follow-card-details'>
                <h5>{props.name}</h5>
                <span>{props.about}</span>
            </div>
        </div>
    </div>
  )
};

export default FollowCard;