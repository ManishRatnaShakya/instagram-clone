import React from 'react'
import './Header.css';
import {notificationAction} from '../../redux/Feed/feed.action';
import { connect } from 'react-redux';
import {selectNotifications} from '../../redux/Feed/feed.selector';
import { createStructuredSelector } from 'reselect';

function Header({dispatch,notification}) {
    console.log("notify",notification)
   
    return (
        <div className="header">
               
            <span className="logo">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />
            </span>
            <span className="search-bar">
                <input type="text" name="search" id="" placeholder="search"/>
            </span>
            <span className="interaction-section">
                <img src="https://img.icons8.com/material-sharp/24/000000/home.png" alt="home" />
                <img src="https://img.icons8.com/material-sharp/24/000000/facebook-messenger.png" alt="facebook-messenger" />
                <img src="https://img.icons8.com/material/24/000000/compass--v1.png" alt="explore"/>
                <img src="https://img.icons8.com/ios-filled/24/000000/love-circled.png" alt="love-circled" onClick={()=>dispatch(notificationAction)} />
                <img src="https://img.icons8.com/ios-filled/50/000000/filled-circle.png" alt="profile_picture" />
            </span>
            <span className="free-space"></span>
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    notification:selectNotifications
}
)

export default connect(mapStateToProps)(Header)
