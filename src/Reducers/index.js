import { combineReducers } from 'redux'
import authedUser from '../Reducers/authedUser'
import tweets from '../Reducers/tweets'
import users from '../Reducers/users'


export default combineReducers({
    authedUser: authedUser,
    tweets:tweets,
    users:users
})