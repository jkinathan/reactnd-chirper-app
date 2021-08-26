import { RECEIVE_USERS } from '../Actions/users'


export default function user(state={}, action ){

    switch(action.type){
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            }
        default:
            return state
    }

}