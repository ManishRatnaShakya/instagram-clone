import React,{useState,useEffect} from 'react';
import StoryFeed from './StoryFeed/StoryFeed';
import NewsFeed from './NewsFeed/NewsFeed';
import api from '../../apiUrl';
import Suggestions from './Suggestions/Suggestions';
import Notification from '../Notification/Notification';
import {selectNotifications} from '../../redux/Feed/feed.selector';
import './Feed.css';
import {  createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
function Feed({notification}) {
  console.log("feed", notification)
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
           {notification &&
            <div class="modal-content">
              <Notification data={data}/>
            </div>}

        </div>
    )
}

const mapStateToProps=createStructuredSelector({
  notification:selectNotifications
})
export default connect(mapStateToProps)(Feed)
