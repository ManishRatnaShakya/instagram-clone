import {combineReducers} from 'redux';
import feedReducers from './Feed/feed.reducer'
export default combineReducers({
    feed:feedReducers,
})

