var _ = require('underscore');

const initialState = {
    isNetworking: false,
    isCreateScheduleModalOpen: false,
    isCreateBlendModalOpen: false,
};

export default function schedule(state = initialState, action) {
    switch(action.type){
        case 'FETCHING_DATA':
            return {...state, isNetworking: true};

        case 'REQUEST_ERROR':
            return {...state, isNetworking: false};

        case 'SUCCESS_CREATING_BLEND':
            return {...state, isNetworking: false};

        case 'TOGGLE_CREATE_DEFAULT_SCHEDULE':
            return {...state, isCreateScheduleModalOpen: action.isOpen};

        case 'CREATE_DEFAULT_SCHEDULE':
            const defaultFilter = Object.assign({}, defaultFilterOptions);
            return {...state, filterOption: defaultFilter}

        case 'EDIT_DEFAULT_SCHEDULE':
            return state;

        case 'REMOVE_DEFAULT_SCHEDULE':
            return state;

        case 'TOGGLE_CREATE_BLEND':
            return {...state, isCreateBlendModalOpen: action.isOpen};

        case 'EDIT_BLEND':
            return state;

        case 'REMOVE_BLEND':
            return state;

        default:
            return state;
    }
}
