import React from 'react';

/* empty page to show on the links where there is no content */
function EmptyPage() {

    return (
        <div>
            <div className='empty-page'>
                <span className="head">No Content on the page</span>
                <p>Add or follow more content to see content on this page.</p>
            </div>
        </div>
    )
}

export default EmptyPage;
