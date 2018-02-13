var axios = require('axios');
const getAllAromeoStatusRoute = '/api/getAllAromeoStatus';
const updateAllAromeoScheduleRoute = '/api/updateAromeoSchedule/:schedule_id';
const turnOnAromeoRoute = '/api/updateAromeoPowerOn/:power_on';

export function getAromeoStatus() {
    return dispatch=>{
        dispatch(fetchingData());
        return axios.get(getAllAromeoStatusRoute)
            .then(json=>dispatch(receiveAromeoStatusData(json)))
            .catch(err=>dispatch(requestFail(err)))
    }
}

export function updateAllAromeoSchedule(schedule_id) {
    return dispatch=>{
        dispatch(fetchingData());
        return axios.put(updateAllAromeoScheduleRoute)
            .then((schedule_id)=>dispatch(updateAromeoScheduleInProgress(schedule_id)))
            .catch(err=>dispatch(requestFail(err)))
    }
}

export function turnOnAromeo(power_on) {
    return dispatch=>{
        dispatch(fetchingData());
        return axios.put(turnOnAromeoRoute)
            .then(power_on=>dispatch(updateAromeoPowerOnInProgress(power_on)))
            .catch(err=>dispatch(requestFail(err)))
    }
}

function receiveAromeoStatusData(json){
    return{
        type: 'RECEIVED_AROMEO_STATUS_DATA',
        aromeos: json.data
    }
}

function fetchingData(){
    return{
        type:'FETCHING_DATA'
    }
}

function requestFail(error){
    return{
        type: 'REQUEST_ERROR',
        error: error
    }
}

export function updateAromeoStatusValue(index, columnKey, value){
    return {
        type: 'UPDATE_AROMEO_STATUS_VALUE',
        index: index,
        columnKey: columnKey,
        value: value,
    }
}

export function updateAromeoScheduleValue(schedule_id){
    return {
        type: 'UPDATE_AROMEO_SCHEDULE_VALUE',
        schedule_id: schedule_id
        // schedule_name: schedule_name,
    }
}

// by chloe
export function updateAromeoScheduleInProgress(schedule_id){
    return {
        type: 'UPDATE_AROMEO_SCHEDULE',
        schedule_id: schedule_id
    }
}

export function updateAromeoPowerOnInProgress(power_on){
    return {
        type: 'TURN_ON_AROMEO',
        power_on: power_on
    }
}
// done

export function filterWithText(text) {
    return {
        type: 'FILTER_WITH_TEXT',
        value: text
    }
}

export function resetFilterOptions(){
    return {
        type: 'RESET_FILTER_OPTIONS'
    }
}

export function toggleStartManageAromeo(startBool) {
    return {
        type: 'TOGGLE_START_MANAGE_AROMEO',
        value: startBool
    }
}

export function toggleAddAromeoDevice(addBool) {
    return {
        type: 'TOGGLE_ADD_AROMEO_DEVICE',
        value: addBool
    }
}

export function toggleRemoveAromeoDevice(removeBool) {
    return {
        type: 'TOGGLE_REMOVE_AROMEO_DEVICE',
        value: removeBool
    }
}
