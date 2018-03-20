var axios = require('axios');
/* blends */
const createBlendRoute = '/api/createBlend';
// const getAllBlendsRoute = '/api/getAllBlends';
const gethotelBlendsRoute = '/api/getAllBlends/';
const deleteBlendRoute = '/api/deleteBlend/(blendId)';
/* schedules */
const createScheduleRoute = '/api/createSchedule';
const getAllSchedulesRoute = '/api/getAllSchedules';
const deleteScheduleRoute = '/api/deleteSchedule/(scheduleId)';

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

function createBlendSuccess(json){
    return {
        type: 'SUCCESS_CREATE_BLEND',
        json: json
    }
}
function createScheduleSuccess(json){
    return {
        type: 'SUCCESS_CREATE_SCHEDULE',
        json: json
    }
}

function deleteBlendSuccess(json){
    return {
        type: 'SUCCESS_DELETE_BLEND',
        json: json
    }
}
function deleteScheduleSuccess(json){
    return {
        type: 'SUCCESS_DELETE_SCHEDULE',
        json: json
    }
}

export function createBlend(body) {
    return dispatch=>{
        dispatch(fetchingData());
        return axios.post(createBlendRoute, body)
            .then((json)=>dispatch(createBlendSuccess(json)))
            .catch(err=>dispatch(requestFail(err)))
    }
}
// export function getAllBlends() {
//     return dispatch=>{
//         dispatch(fetchingBlendData());
//         return axios.get(getAllBlendsRoute)
//             .then((json)=>dispatch(receiveAllBlends(json)))
//             .catch(err=>dispatch(requestFail(err)))
//     }
// }
export function gethotelBlends(account_id) {
    return dispatch=>{
        dispatch(fetchingBlendData());
        return axios.get(gethotelBlendsRoute + account_id)
            .then((json)=>dispatch(receiveAllBlends(json)))
            .catch(err=>dispatch(requestFail(err)))
    }
}
export function removeBlend(blendId) {
    var api = deleteBlendRoute.replace('(blendId)', blendId);
    return dispatch=>{
        dispatch(fetchingData());
        return axios.get(api).then((json)=>dispatch(deleteBlendSuccess(json)))
            .catch(err=>dispatch(requestFail(err)))
    }
}

export function createSchedule(body) {
    return dispatch=>{
        dispatch(fetchingData());
        return axios.post(createScheduleRoute, body)
            .then((json)=>dispatch(createScheduleSuccess(json)))
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
export function removeSchedule(scheduleId) {
    var api = deleteScheduleRoute.replace('(scheduleId)', scheduleId);
    return dispatch=>{
        dispatch(fetchingData());
        return axios.get(api).then((json)=>dispatch(deleteScheduleSuccess(json))).catch(err=>dispatch(requestFail(err)))
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
    return {
        type: 'TOGGLE_REMOVE_BLEND',
        isOpen: isOpen,
        targetId: targetId
    }
}
export function toggleRemoveSchedule(isOpen, targetId) {
    return {
        type: 'TOGGLE_REMOVE_SCHEDULE',
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

