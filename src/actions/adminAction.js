var axios = require('axios');

/*Accounts*/
const getAllHotelsRoute = '/api/getAllHotels';

export function setToggleId(toggle_id){
    return{
        type: 'SET_TOGGLE_ID',
        toggleId: toggle_id
    }
}

export function setHotelId(hotel_id){
    return{
        type: 'SET_HOTEL_ID',
        hotelId: hotel_id
    }
}

export function fetchingHotelData(){
    return{
        type:'FETCHING_HOTELS'
    }
}

export function receiveAllHotels(json){
    return{
        type: 'RECEIVE_ALL_HOTELS',
        hotels: json.data
    }
}

export function requestFail(error) {
    return {
        type: 'REQUEST_ERROR',
        error: error
    }
}

export function getAllHotels() {
    return dispatch=>{
        dispatch(fetchingHotelData());
        return axios.get(getAllHotelsRoute)
            .then((json)=>dispatch(receiveAllHotels(json)))
            .catch(err=>dispatch(requestFail(err)))
    }
}
