import React from 'react'
import './UserStory.css'
function UserStory({profile_picture,name}) {
    return (
        <span className="story">
            <div className="profile-image"><img src={profile_picture} alt={name}/></div>
            <div className="profile_name">{name}</div>
        </span>
    )
}

export default UserStory
