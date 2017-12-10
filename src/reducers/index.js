import {combineReducers} from 'redux'
import control from './controlReducer'
import schedule from './scheduleReducer'
import admin from './adminReducer'

export default combineReducers({
    control,
    schedule,
    admin
});
