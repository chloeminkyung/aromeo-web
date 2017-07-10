var axios = require('axios');
const createBlendRoute = 'https://aromeo-backend.herokuapp.com/api/createBlend';
const localCreateBlendRoute = 'http://localhost:5000/api/createBlend';



export function createBlend(body) {
    return dispatch=>{
        dispatch(fetchingData());
        return axios.post(localCreateBlendRoute, body)
            .then((json)=>dispatch(successCreatingBlend(json)))
            .catch(err=>dispatch(requestFail(err)))
    }
}

function successCreatingBlend(){
    return{
        type: 'SUCCESS_CREATING_BLEND',
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


export function toggleCreateDefaultSchedule(isOpen) {
    return {
        type: 'TOGGLE_CREATE_DEFAULT_SCHEDULE',
        isOpen: isOpen
    }
}

export function createDefaultSchedule(scheduleDetail) {
    return {
        type: 'CREATE_DEFAULT_SCHEDULE',
        scheduleDetail: scheduleDetail
    }
}

export function editDefaultSchedule(scheduleId, scheduleDetail) {
    return {
        type: 'EDIT_DEFAULT_SCHEDULE',
        scheduleId: scheduleId,
        scheduleDetail: scheduleDetail
    }
}

export function removeDefaultSchedule(scheduleId) {
    return {
        type: 'REMOVE_DEFAULT_SCHEDULE',
        scheduleId: scheduleId
    }
}

export function toggleCreateBlend(isOpen) {
    return {
        type: 'TOGGLE_CREATE_BLEND',
        isOpen: isOpen
    }
}

export function editBlend(blendId, blendDetail) {
    return {
        type: 'EDIT_BLEND',
        blendId: blendId,
        blendDetail: blendDetail
    }
}

export function removeBlend(blendId) {
    return {
        type: 'REMOVE_BLEND',
        blendId: blendId
    }
}
