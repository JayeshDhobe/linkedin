import React from 'react';
import './Sidebar.css';

function Sidebar() {
    
    const recentItem = (topic) => {
        return (
            <div className="sidebar_recenItem">
                <span className="sidebar_hash">#</span>
                <p>{topic}</p>
            </div>
        );
    }

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://i.ibb.co/9yBzYbn/Jayesh.jpg" alt="cover" />
            <img src="https://i.ibb.co/DtsXQkj/1640694121668.jpg"/>
            <h2>Jayesh Dhobe</h2>
            <h4>Jayeshdhobe07@gmail.com</h4>
        </div>
        
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who views you</p>
                <p className="sidebar_statNumber">11,010</p>
            </div>
            <div className="sidebar_stat">
                <p>Views you post</p>
                <p className="sidebar_statNumber">99,999</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('Web development')}
            {recentItem('Front-end ')}
            {recentItem('Back-End')}
            {recentItem('MongoDB')}
            {recentItem('NodeJs')}
            {recentItem('ExpressJs')}
        </div>
    </div>
  )
}

export default Sidebar