import { combineReducers } from 'redux'
import band from './band'
import events from './events'
import videos from './videos'

export default combineReducers({ band, events, videos })