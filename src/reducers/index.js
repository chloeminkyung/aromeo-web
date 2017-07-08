import {combineReducers} from 'redux'
import control from './controlReducer'
import schedule from './scheduleReducer'

export default combineReducers({
    control,
    schedule
});
