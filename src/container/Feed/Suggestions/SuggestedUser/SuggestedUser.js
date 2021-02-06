import React from 'react'
import './SuggestedUser.css'
function SuggestedUser({profile_picture,username}) {
    return (
        <div className="suggestedUser">
            <div className="profile">
            <span className="profile-image"><img src={profile_picture} alt="profile-pic"></img></span>
            <span><p>{username}</p></span>
            </div>

            <span className="follow"><p>Follow</p></span>      
        </div>
    )
}

export default SuggestedUser
