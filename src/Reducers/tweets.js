import { RECEIVE_TWEETS } from '../Actions/tweets'


export default function tweets (state={}, action ){

    switch(action.type){
        case RECEIVE_TWEETS:
            return{
                ...state,
                ...action.tweets
            }
        default:
            return state
    }

}