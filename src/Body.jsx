import React from 'react';
import './body.css';


function Body() {
  return (
    <div className='body'>
        <input type='text' placeholder='Search by name or email' className='input'/>
       
      <div className="filter">
        Filter By
        <div className="filtertab">
        <div className="navbar">
      <li>
        Date:Last 90 days
      </li>
    </div>

    <div className="navbar">
      <li>
        Type
      </li>
    </div>

    <div className="navbar">
      <li>
       Status
      </li>
    </div>
        </div>
      </div>
      <div className="filter">
        Completed
        </div>
        <span>This week</span>
    </div>
  )
}

export default Body;
