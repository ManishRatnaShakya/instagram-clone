import React,{useState,useEffect} from 'react';
import StoryFeed from './StoryFeed/StoryFeed';
import NewsFeed from './NewsFeed/NewsFeed';
import api from '../../apiUrl';
import Suggestions from './Suggestions/Suggestions';
import './Feed.css';
function Feed() {
     const [data,setData]=useState();
    useEffect(()=>{
      fetch(`${api}`).then(res=>res.json()).then(result=>setData(result));
    },[])
    return (
        <div className="feed">
           <span></span> 
           <span>
               <div><StoryFeed data={data}/></div>
               <div><NewsFeed data={data}/></div>
            </span> 
           <span><Suggestions data={data}/></span> 
           <span></span> 
        </div>
    )
}

export default Feed
