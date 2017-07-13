var axios = require('axios');
const getAllAromeoStatusRoute = '/api/getAllAromeoStatus/(hotelId)';

export function getAromeoStatus(hotelId) {
    const api = getAllAromeoStatusRoute.replace('(hotelId)',hotelId);
    return dispatch=>{
        dispatch(fetchingData());
        return axios.get(api).then(json=>dispatch(receiveAromeoStatusData(json))).catch(err=>dispatch(requestFail(err)))
    }
}

function receiveAromeoStatusData(json){
    return{
        type: 'RECEIVED_AROMEO_STATUS_DATA',
        data: json.data
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
