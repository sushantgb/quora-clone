import React from 'react';
import PostFeed from '../../data/Postfeed';
import PostFeedCards from './PostFeedCards';

export default function PostFeedComp() {
    
    return (
        <div className='post-feed'>
            {PostFeed.map((val) => {
                return (
                    <>
                        <PostFeedCards 
                            key={val.key}
                            avatar={val.avatar}
                            username={val.username}
                            designation={val.designation}
                            date={val.date}
                            question={val.question}
                            excerpt={val.excerpt}
                            readmore={val.readmore}
                            image={val.image}
                            views={val.views}
                            upvote={val.upvote}
                            comments={val.comments}
                            repost={val.repost}
                            category={val.category}
                        />
                    </>
                )

            })
            }

        </div>
    )
}
