import React,{useState} from 'react'
import './userNewsFeed.css'
function UserNewsFeed(props) {
    const [liked,setLiked]=useState(false);
    const {feedImage,profile_picture, name,descriptions,likes}=props;
    const likeCount =()=>{
        setLiked(!liked)
        if(!liked){
            console.log("like",likes+1)
        }
        else{
            console.log("unlike",likes-1)
        }
    }
    return (
        <div className="userNewsFeed">
            <div className="profile">
            <span className="profile_data">
                 <span><img src={profile_picture} alt="profile_picture"/></span>
                <span className="profile_name"><p>{name}</p></span>
            </span>
            <span className="options">&#8943;</span>
            </div>
            <div className="feed-image">
            <img src={feedImage} alt="feed-img"/>
            </div>
            <div className="reaction">
                <span>
                <span className="like">{liked?<img src="https://img.icons8.com/office/16/000000/hearts.png" alt="filled-love" onClick={likeCount}/>:<img src="https://img.icons8.com/ios/50/000000/like--v1.png" alt="love-react"  onClick={likeCount}/>}</span>
                <span><img src="https://img.icons8.com/ios/50/000000/topic.png" alt="comment"/></span>
                <span><img src="https://img.icons8.com/dotty/80/000000/filled-sent.png" alt="send"/></span>
                </span>
                <span className="bookmark"><img src="https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon--v1.png" alt="bookmark-ribbon"/></span>
            </div>
            <div className="reaction-output">
                <div className="likes"><p>{likes} likes</p></div>
                <div className="user-detail">
                        <span className="username" ><p>{name}</p></span>
                        <span className="descriptions"><p>{descriptions}</p></span>
                </div>
            </div>


            
        </div>
    )
}

export default UserNewsFeed
