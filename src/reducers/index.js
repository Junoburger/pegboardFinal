import { combineReducers } from 'redux'
import posts from './posts'
import users from './users'
import logUser from './logUser'

export default combineReducers({ posts, users, logUser })
