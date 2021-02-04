// import {feedActionTypes} from './feed.types';
const INITIAL_STATE={
    feedData:"hello manish! how are you ?"
};

const feedReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
 
export default feedReducer;