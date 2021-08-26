import  { SETAUTHEDUSER }  from '../Actions/authedUser'


export default function authedUser(state=null, action ){

    switch(action.type){
        case SETAUTHEDUSER:
            return action.id

        default:
            return state
    }

}