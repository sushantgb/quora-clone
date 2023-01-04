import React, { useState, useEffect } from 'react';
import PostFeed from '../../data/Postfeed';
import PostFeedCards from './PostFeedCards';
import { useGlobalContext } from '../../context/Context';
import { CgUnavailable } from "react-icons/cg";

export default function PostFeedComp() {
    /* using the global context */
    const contextValue = useGlobalContext();

    /* state for the post data */
    const [postState, setPostState] = useState(PostFeed);
    console.log("ContextValue : " + contextValue[0]);

    /* class state for the div to show when no data is found */
    const [classState, setClassState] = useState("hidden-class");
    /* for filtering the data */
    useEffect(() => {
        /* default value */
        if (contextValue[0] === 'All') {
            setPostState(PostFeed);
            setClassState("hidden-class")
        } else {
            /* updater */
            const updater = PostFeed.filter((val) => {
                return (
                    val.category.toLowerCase() === contextValue[0] || val.question.toLowerCase().includes(contextValue[0])
                );
            });
            if (!updater.length) {
                setClassState("post-feed-card");
            } else {
                setClassState("hidden-class");
            }
            setPostState(updater);
        }
    }, [contextValue]);

    return (
        <>
            <div className='post-feed'>
                {postState.map((val) => {
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
            {/* no data found - div */}
            <div className={classState}>
                <div className='no-data-div'>
                    <span><CgUnavailable /></span>
                    <span>Sorry! No Data Found for This Query</span>
                </div>
            </div>
        </>

    )
}
