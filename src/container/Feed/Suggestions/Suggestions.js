import React from 'react'
import './Suggestions.css';
import Profile from './Profile/Profile';
import SuggestedUser from './SuggestedUser/SuggestedUser'
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
            <div>
                <div className="for-you"> 
                    <span className="suggest"><p>Suggested for you</p> </span>
                    <span className="see-all"><p>See all</p></span>
                  </div>
                {
                    data &&
                    data.filter((d,i)=>i<5)
                    .map((d)=>
                    <SuggestedUser key={d.id} profile_picture={d.user.profile_image.small} username={d.user.instagram_username}/>
                    )
                }
            </div> 
        </div>
    )
}

export default Suggestions
