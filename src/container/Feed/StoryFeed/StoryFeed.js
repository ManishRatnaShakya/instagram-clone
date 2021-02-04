import React from 'react'
import UserStory from './UserStory/UserStory'

import './StoryFeed.css'
function StoryFeed({data}) {
   
     return (
        <div className="story-feed">
            {
            data &&
            data
            .map((d)=>
            <UserStory key={d.id} profile_picture={d.user.profile_image.small} name={d.user.instagram_username}/>
            )
            }
            
        </div>
    )
}

export default StoryFeed
