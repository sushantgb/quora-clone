import React from 'react';

/* show page when url is wrong */
function ErrorPage() {
  return (
    <div className='error-div'>
        <span className='head'>404</span>
        <p>Error: Page Not Found</p>
    </div>
  )
}

export default ErrorPage;
