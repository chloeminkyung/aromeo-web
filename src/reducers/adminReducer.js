var _ = require('underscore');

const initialState = {
    toggleId: 0,
    hotelId: null,
    hotels: null,
    isNetworking: false,
    isFetchingHotels: false
};

export default function admin(state = initialState, action) {
    switch(action.type){
        case 'FETCHING_HOTELS':
            return {...state, isFetchingHotels: true};
        case 'SET_TOGGLE_ID':
            return {...state, toggleId: action.toggleId};
        case 'SET_HOTEL_ID':
            return {...state, hotelId: action.hotelId};
        case 'RECEIVE_ALL_HOTELS':
            return {...state, hotels: action.hotels, isFetchingHotels: false};
        case 'REQUEST_ERROR':
            return {...state, isNetworking: false};
        default:
            return state;
    }
}
