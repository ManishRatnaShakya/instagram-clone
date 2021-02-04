import React from 'react'
import './Suggestions.css';
import Profile from './Profile/Profile'
function Suggestions({data}) {
    return (
        <div className="suggestions">
          <div className="profile_view">
            {
            data && 
            data
            .filter((d,i) =>i<1)
            .map((d) =>
                
                <Profile profile_picture={d.user.profile_image.small} name={d.user.first_name +" "+ d.user.last_name} username={d.user.instagram_username}/>
            )
            }
            </div>
        </div>
    )
}

export default Suggestions
