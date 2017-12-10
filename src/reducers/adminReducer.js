var _ = require('underscore');

const initialState = {
    toggleId: 0
};

export default function admin(state = initialState, action) {
    switch(action.type){
        case 'SET_TOGGLE_ID':
            return {...state, toggleId: action.toggleId};
        default:
            return state;
    }
}
