import React from 'react'
import UserNewsFeed from './userNewsFeed/UserNewsFeed'
import './NewFeed.css'
function NewsFeed({data}) {
    console.log("from newsfeed",data)
    return (
        <div className="news-feed">
            {data
            &&
            data.map((d)=>(
                <UserNewsFeed 
                key={d.id}
                feedImage={d.urls.full}  
                profile_picture={d.user.profile_image.small} 
                name={d.user.instagram_username}
                descriptions={d.alt_description}
                likes={d.likes}/>
            ))
            }
    
        </div>
    )
}

export default NewsFeed
