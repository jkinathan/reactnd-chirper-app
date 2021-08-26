import { SETAUTHEDUSER } from '../Actions/users'


export default function autheduser(state=null, action ){

    switch(action.type){
        case SETAUTHEDUSER:
            return action.id
            
        default:
            return state
    }

}