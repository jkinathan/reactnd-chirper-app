import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveTweets } from './tweets'
import { setAuthedUser } from './authedUser'

const AUTHEDID = 'tylermcginnis'

export function handleInitialData(){
    return (dispatch)=>{
        return getInitialData()
        .then(({ users, tweets })=>{

            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(setAuthedUser(AUTHEDID))
        })
    }
}