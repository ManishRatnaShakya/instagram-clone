import React from 'react';
import './App.css';
import Header from './container/Header/Header'

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Feed from './container/Feed/Feed'
import { connect } from 'react-redux';
import {selectFeedData} from './redux/Feed/feed.selector';
import { createStructuredSelector } from 'reselect';
function App(props) {
  console.log("this is a feed",props.feed)
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route path="/"  component={Feed}/>
      </Router>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  feed:selectFeedData,
})
export default connect(mapStateToProps)(App);
