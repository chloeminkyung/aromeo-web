var _ = require('underscore');

const initialState = {
    isNetworking: false,
    isFetchingBlends: false,
    isFetchingSchedules: false,
    scheduleId: null,
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
        case 'SUCCESS_CREATE_SCHEDULE':
            var newSchedule = state.schedules.slice();
            if(action.json.status==200)
                newSchedule.push(action.json.data);
            return {...state, isNetworking: false, schedules: newSchedule};

        case 'SUCCESS_DELETE_BLEND':
            var newBlend = state.blends.slice();
            if(action.json.status==200)
                newBlend = newBlend.filter(function(blend){
                    return blend.blend_name.toString().localeCompare(action.json.data.toString()) != 0;
                });
            return {...state, isNetworking: false, blends: newBlend};

        case 'SUCCESS_DELETE_SCHEDULE':
            var newSchedule = state.schedules.slice();
            if(action.json.status==200)
                newSchedule = newSchedule.filter(function(schedule){
                    return schedule.schedule_name.toString().localeCompare(action.json.data.toString()) != 0;
                });
            return {...state, isNetworking: false, schedules: newSchedule};

        case 'TOGGLE_CREATE_DEFAULT_SCHEDULE':
            return {...state, isCreateScheduleModalOpen: action.isOpen};
        case 'TOGGLE_CREATE_BLEND':
            return {...state, isCreateBlendModalOpen: action.isOpen};
        case 'TOGGLE_REMOVE_BLEND':
            return {...state, isRemoveBlendModalOpen: action.isOpen, targetId: action.targetId};
        case 'TOGGLE_REMOVE_SCHEDULE':
            return {...state, isRemoveScheduleModalOpen: action.isOpen, targetId: action.targetId};
        case 'APPLY_SCHEDULE_TO_ONE':
            var newSchedule = state.aromeos.slice();
            if(action.json.status==200)
                newSchedule = newSchedule.filter(function(aromeo){
                    return aromeo.schedule_id.toString().localCompare(action.json.data.toString()) != 0;
                })
            return {...state, isNetworking: false, aromeos.schedule_id: newSchedule};

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
