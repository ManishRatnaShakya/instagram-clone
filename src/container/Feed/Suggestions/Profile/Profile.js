import React from 'react'
import './Profile.css'
function Profile(props) {
    const {profile_picture,username,name}=props
    return (
        <div className="profile">
            <span className="profile_picture">
            <img src={profile_picture} alt="profile_pic"/>
            </span>
            <span className="profile_description">
            <p>{username}</p>
            <p>{name}</p>
            </span>
        </div>
    )
}

export default Profile
