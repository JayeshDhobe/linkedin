import React from 'react';
import './Header.css';
import {BsSearch} from 'react-icons/bs';
import {IoHomeSharp} from 'react-icons/io5';
import {FaUserFriends} from 'react-icons/fa';
import {MdBusinessCenter , MdNotifications} from 'react-icons/md';
import {RiMessage2Fill} from 'react-icons/ri';
import {BsGrid3X3GapFill} from 'react-icons/bs';
import Logo from '../image/logo.png'
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
        <div className="header_left">
            <img src={Logo} />
            <div className="header_search">
                <BsSearch />
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon={IoHomeSharp} title='Home' />
            <HeaderOption Icon={FaUserFriends} title='My Network' />
            <HeaderOption Icon={MdBusinessCenter} title='Jobs' />
            <HeaderOption Icon={RiMessage2Fill} title='Messaging' />
            <HeaderOption Icon={MdNotifications} title='Notifications' />
            <HeaderOption avatar='https://i.ibb.co/DtsXQkj/1640694121668.jpg' title='Me'/>
            <HeaderOption Icon={ BsGrid3X3GapFill } title='Work' />
        </div>
    </div>
  )
}

export default Header