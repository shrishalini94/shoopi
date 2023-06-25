import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './header.css';
import {ImPaypal,} from 'react-icons/im';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {AiOutlineSetting} from 'react-icons/ai';
 
function Nav() {
  return (
    <div className="topbar">
    <ul className="list">
        <div className='nav'>
    <div className="navvbar">
      <li>
        <ImPaypal/>
      </li>
    </div>

    <div className="navvbar">
      <li>
        Home
      </li>
    </div>

    <div className="navvbar">
      <li>
       Finances
      </li>
    </div>

    <div className="navvbar">
      <li>
        Send and Request
      </li>
    </div>

    <div className="navvbar">
      <li>
        Deals
      </li>
    </div>

    <div className="navvbar">
     Wallet
    </div>
    </div>
    </ul>
    <div className='right'>
    
    <div className='icon'>
    <IoMdNotificationsOutline/></div>
    <div className='icon'>
    <AiOutlineSetting/></div>
   
    <div className="navbarr">
      
        Logout
    
    </div>  
    </div>
    </div>


   
  )
}

export default Nav;