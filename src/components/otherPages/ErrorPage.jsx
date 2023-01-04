import React from 'react';
import { BiError } from 'react-icons/bi';

/* show page when url is wrong */
function ErrorPage() {
  return (
    <div className='error-div'>
        <span><BiError /></span>
        <span className='head'>404</span>
        <p>Error: Page Not Found</p>
    </div>
  )
}

export default ErrorPage;
