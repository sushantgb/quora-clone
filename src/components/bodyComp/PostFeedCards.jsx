import React, { useState } from 'react';

/* post feed settings */
function PostFeedCards(props) {

    /* for toggling readmore button */
    const [classValue, setClassValue] = useState('hidden-class');
    /* for hiding the button on expanding the text */
    const [btnClassValue, setBtnClassValue] = useState('read-more-btn');

    const ToggleFunc = (e) => {
        if(e.currentTarget.value === 'expand'){
            setClassValue('expanded-text');
            setBtnClassValue('hidden-class');
        }else if(e.currentTarget.value === 'shrink'){
            setClassValue('hidden-class');
            setBtnClassValue('read-more-btn');
        }
    }

    /* for changing state of upvote buttons on click */
    const [colorStyle, setColorStyle] = useState('upvoteBtn');
    const [colorSpan, setColorSpan] = useState('votes-count');
    const [colorStyle2, setColorStyle2] = useState('downvoteBtn');

    /* function to toggle the color of upvote icons */
    const ColorToggle = (e) => {
        if (e.currentTarget.value === 'upvote') {
            setColorStyle('blue-class');
            setColorSpan('blue-class');
            setColorStyle2('downvoteBtn');
        } else if (e.currentTarget.value === 'downvote') {
            setColorStyle('upvoteBtn');
            setColorSpan('votes-count');
            setColorStyle2('blue-class');
        }
    }

    return (
        <div className='post-feed-card'>
            <div className='feed-upper'>
                <div className='user-avatar'>
                    <img src={props.avatar} alt='user avatar' />
                </div>
                <div className='user-details'>
                    <div className='user-heading'>
                        <span><strong>{props.username}</strong></span>
                        <button type='button'>follow</button>
                    </div>
                    <div className='user-description'>
                        <span>{props.designation}</span>
                        <span> | </span>
                        <span>{props.date}</span>
                    </div>
                </div>
                <div className='cross-button'>
                    <button value='shrink' onClick={ToggleFunc}title='Close'><i className="bi bi-x-lg"></i></button>
                </div>
            </div>
            <div className='question-bar'>
                <span><strong>{props.question}</strong></span>
            </div>
            <div className='post-bar'>
                <div className='main-excerpt'>
                    <p>{props.excerpt} <button onClick={ToggleFunc} className={btnClassValue} value='expand'>Read More</button></p>
                </div>
                <div className={classValue}>
                    <p>{props.readmore}</p>
                    <p className='views-text'>{props.views}</p>
                </div>
            </div>
            <div className='image-sect'>
                <img src={props.image} alt='post illustration' />
            </div>
            <div className='buttons-bar'>
                <div className='reaction-buttons'>
                    <div className='upvote-btns'>
                        <button value='upvote' className={colorStyle} onClick={ColorToggle} title='Upvote'><i className="bi bi-arrow-up"></i></button>
                        <span className={colorSpan}>{props.upvote}</span>
                        <button value='downvote' className={colorStyle2} onClick={ColorToggle} title='Downvote'><i className="bi bi-arrow-down"></i></button>
                    </div>
                    <div className='comment-info'>
                        <button className='comment-icon' title='Comment'><i className="bi bi-chat"></i></button>
                        <span>{props.comments}</span>
                    </div>
                    <div className='repost-info'>
                        <button className='repost-icon' title='Repost'><i className="bi bi-arrow-repeat"></i></button>
                        <span>{props.repost}</span>
                    </div>
                </div>
                <div className='three-dots-btn'>
                    <button title='more'><i className="bi bi-three-dots"></i></button>
                </div>
            </div>
        </div>
    )
}

export default PostFeedCards;
