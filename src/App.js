import React from 'react';
import './App.css';
import Instagram from './container/Instagram'

import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Feed from './container/Feed/Feed'
import { connect } from 'react-redux';
import {selectFeedData} from './redux/Feed/feed.selector';
import { createStructuredSelector } from 'reselect';
import Login from './container/Login/Login';
function App(props) {
  console.log("this is a feed",props.feed)
  return (
    <div className="App">
      
      <Router>
        <Route exact path="/"  component={Instagram}/>
        <Route path="/login"  component={Login}/>
      </Router>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  feed:selectFeedData,
})
export default connect(mapStateToProps)(App);
