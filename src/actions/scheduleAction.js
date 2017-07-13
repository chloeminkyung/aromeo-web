var axios = require('axios');
/* blends */
const createBlendRoute = '/api/createBlend';
const getAllBlendsRoute = '/api/getAllBlends';
const deleteBlendRoute = '/api/deleteBlend/(blendId)';
/* schedules */
const createScheduleRoute = '/api/createSchedule';
const getAllSchedulesRoute = '/api/getAllSchedules';

function fetchingData(){
    return{
        type:'FETCHING_DATA'
    }
}
function fetchingBlendData(){
    return{
        type:'FETCHING_BLENDS'
    }
}
function fetchingScheduleData(){
    return{
        type:'FETCHING_SCHEDULES'
    }
}
function requestFail(error){
    return{
        type: 'REQUEST_ERROR',
        error: error
    }
}
function receiveAllBlends(json){
    return{
        type: 'RECEIVE_ALL_BLENDS',
        blends: json.data
    }
}
function receiveAllSchedules(json){
    return{
        type: 'RECEIVE_ALL_SCHEDULES',
        schedules: json.data
    }
}
function success(json){
    return{
        type: 'SUCCESS',
    }
}

export function createBlend(body) {
    return dispatch=>{
        dispatch(fetchingData());
        return axios.post(createBlendRoute, body)
            .then((json)=>dispatch(success(json)))
            .catch(err=>dispatch(requestFail(err)))
    }
}
export function getAllBlends() {
    return dispatch=>{
        dispatch(fetchingBlendData());
        return axios.get(getAllBlendsRoute)
            .then((json)=>dispatch(receiveAllBlends(json)))
            .catch(err=>dispatch(requestFail(err)))
    }
}
export function removeBlend(blendId) {
    var api = deleteBlendRoute.replace('(blendId)', blendId);
    return dispatch=>{
        dispatch(fetchingData());
        return axios.get(api).then((json)=>dispatch(success(json))).catch(err=>dispatch(requestFail(err)))
    }
}

export function createSchedule(body) {
    return dispatch=>{
        dispatch(fetchingData());
        return axios.post(createScheduleRoute, body)
            .then((json)=>dispatch(success(json)))
            .catch(err=>dispatch(requestFail(err)))
    }
}
export function getAllSchedules() {
    return dispatch=>{
        dispatch(fetchingScheduleData());
        return axios.get(getAllSchedulesRoute)
            .then((json)=>dispatch(receiveAllSchedules(json)))
            .catch(err=>dispatch(requestFail(err)))
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

