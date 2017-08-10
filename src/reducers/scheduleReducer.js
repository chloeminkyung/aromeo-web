var _ = require('underscore');

const initialState = {
    isNetworking: false,
    isFetchingBlends: false,
    isFetchingSchedules: false,
    targetId: null,
    isCreateScheduleModalOpen: false,
    isCreateBlendModalOpen: false,
    isRemoveBlendModalOpen: false,
    isRemoveScheduleModalOpen: false,
    blends: null,
    schedules: null,
};

export default function schedule(state = initialState, action) {
    switch(action.type){
        case 'FETCHING_DATA':
            return {...state, isNetworking: true};
        case 'FETCHING_BLENDS':
            return {...state, isFetchingBlends: true};
        case 'FETCHING_SCHEDULES':
            return {...state, isFetchingSchedules: true};
        case 'REQUEST_ERROR':
            return {...state, isNetworking: false};
        case 'RECEIVE_ALL_BLENDS':
            return {...state, blends: action.blends, isFetchingBlends: false};
        case 'RECEIVE_ALL_SCHEDULES':
            return {...state, schedules: action.schedules, isFetchingSchedules: false};
        case 'SUCCESS':
            return {...state, isNetworking: false};
        case 'SUCCESS_CREATE_BLEND':
            var newBlend = state.blends.slice();
            if(action.json.status==200)
                newBlend.push(action.json.data);
            return {...state, isNetworking: false, blends: newBlend};

        case 'TOGGLE_CREATE_DEFAULT_SCHEDULE':
            return {...state, isCreateScheduleModalOpen: action.isOpen};
        case 'TOGGLE_CREATE_BLEND':
            return {...state, isCreateBlendModalOpen: action.isOpen};
        case 'TOGGLE_REMOVE_BLEND':
            return {...state, isRemoveBlendModalOpen: action.isOpen, targetId: action.targetId};
        case 'TOGGLE_REMOVE_SCHEDULE':
            return {...state, isRemoveScheduleModalOpen: action.isOpen, targetId: action.targetId};

        case 'EDIT_DEFAULT_SCHEDULE':
            return state;

        case 'REMOVE_DEFAULT_SCHEDULE':
            return state;

        case 'EDIT_BLEND':
            return state;

        case 'REMOVE_BLEND':
            const defaultFilter = Object.assign({}, {});

            return state;

        default:
            return state;
    }
}
