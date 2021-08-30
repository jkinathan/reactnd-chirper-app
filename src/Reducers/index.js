import { combineReducers } from 'redux'
import authedUser from '../Reducers/authedUser'
import tweets from '../Reducers/tweets'
import users from '../Reducers/users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authedUser: authedUser,
    tweets:tweets,
    users:users,
    loadingBar:loadingBarReducer
})