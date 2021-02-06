import feedActionTypes from './feed.types';
const INITIAL_STATE={
    feedData:"hello manish! how are you ?",
    showNotifications:false
};

const feedReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case feedActionTypes.NOTIFICATION:
            return{
                ...state,
                showNotifications:!state.showNotifications
            }
        default:
            return state;
    }
}
 
export default feedReducer;