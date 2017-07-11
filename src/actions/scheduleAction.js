var axios = require('axios');
const createBlendRoute = '/api/createBlend';
const getAllBlendsRoute = '/api/getAllBlends';
const deleteBlendRoute = '/api/deleteBlend/(blendId)';

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

function successCreatingBlend(json){
    return{
        type: 'SUCCESS_CREATING_BLEND',
    }
}
function receiveAllBlends(json){
    return{
        type: 'RECEIVE_ALL_BLENDS',
        blends: json.data
    }
}
function successDeletingBlend(json){
    return{
        type: 'SUCCESS_DELETING_BLEND',
    }
}

export function createBlend(body) {
    return dispatch=>{
        dispatch(fetchingData());
        return axios.post(createBlendRoute, body)
            .then((json)=>dispatch(successCreatingBlend(json)))
            .catch(err=>dispatch(requestFail(err)))
    }
}
export function getAllBlends() {
    return dispatch=>{
        dispatch(fetchingData());
        return axios.get(getAllBlendsRoute)
            .then((json)=>dispatch(receiveAllBlends(json)))
            .catch(err=>dispatch(requestFail(err)))
    }
}
export function removeBlend(blendId) {
    var api = deleteBlendRoute.replace('(blendId)', blendId);
    return dispatch=>{
        dispatch(fetchingData());
        return axios.get(api).then((json)=>dispatch(successDeletingBlend(json))).catch(err=>dispatch(requestFail(err)))
    }
}


export function toggleCreateDefaultSchedule(isOpen) {
    return {
        type: 'TOGGLE_CREATE_DEFAULT_SCHEDULE',
        isOpen: isOpen
    }
}
export function toggleCreateBlend(isOpen) {
    return {
        type: 'TOGGLE_CREATE_BLEND',
        isOpen: isOpen
    }
}
export function toggleRemoveBlend(isOpen, targetId) {
    console.warn(targetId);
    return {
        type: 'TOGGLE_REMOVE_BLEND',
        isOpen: isOpen,
        targetId: targetId
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

export function editBlend(blendId, blendDetail) {
    return {
        type: 'EDIT_BLEND',
        blendId: blendId,
        blendDetail: blendDetail
    }
}

