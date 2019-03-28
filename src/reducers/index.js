import redditReducer from './redditReducer.js'
import {combineReducers} from 'redux'

const rootReducer = combineReducers(redditReducer)
export default rootReducer;
