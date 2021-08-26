import { combinedReducers } from 'redux'
import { autheduser } from '../Reducers/authedUser'
import { tweets } from '../Reducers/tweets'
import { users } from '../Reducers/users'


export default combinedReducers({
    authedUser: autheduser,
    tweets:tweets,
    users:users
})