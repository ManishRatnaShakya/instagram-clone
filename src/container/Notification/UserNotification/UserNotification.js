import React from 'react'
import './UserNotification.css'
function UserNotification({profile_picture,username}) {
    return (
        <div className="user-notification">
            <span className="notification">
            <span className="profile-image"><img src={profile_picture} alt="profile_picture"/></span>
            <span className="profile-name"><p>{username}</p></span>
            </span>
            <span className="follow-button">
                <button>Following</button> 
            </span>

          
        </div>
    )
}

export default UserNotification
