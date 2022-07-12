import React from 'react';
import '../error.css';

const Error = () => {
  return (
    <>
      <div className='container1'>
       <div className="error">404</div>
          <br /><br />
          <span className="info">File not found</span>
          <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" alt='error img...' class="static" />
      </div>
    </>
  )
}

export default Error