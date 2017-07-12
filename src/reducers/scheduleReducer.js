var _ = require('underscore');

const initialState = {
    isNetworking: false,
    targetId: null,
    isCreateScheduleModalOpen: false,
    isCreateBlendModalOpen: false,
    isRemoveBlendModalOpen: false,
    blends: null
};

export default function schedule(state = initialState, action) {
    switch(action.type){
        case 'FETCHING_DATA':
            console.warn("networkinggg")
            return {...state, isNetworking: true};

        case 'REQUEST_ERROR':
            return {...state, isNetworking: false};
        case 'RECEIVE_ALL_BLENDS':
            return {...state, blends: action.blends, isNetworking: false};
        case 'SUCCESS':
            return {...state, isNetworking: false};

        case 'TOGGLE_CREATE_DEFAULT_SCHEDULE':
            return {...state, isCreateScheduleModalOpen: action.isOpen};
        case 'TOGGLE_CREATE_BLEND':
            return {...state, isCreateBlendModalOpen: action.isOpen};
        case 'TOGGLE_REMOVE_BLEND':
            return {...state, isRemoveBlendModalOpen: action.isOpen, targetId: action.targetId};

        case 'EDIT_DEFAULT_SCHEDULE':
            return state;

        case 'REMOVE_DEFAULT_SCHEDULE':
            return state;


        case 'EDIT_BLEND':
            return state;

        case 'REMOVE_BLEND':
            const defaultFilter = Object.assign({}, defaultFilterOptions);

            return state;

        default:
            return state;
    }
}
