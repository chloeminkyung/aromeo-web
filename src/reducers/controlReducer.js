var _ = require('underscore');
import {fakeControlData} from '../constants/dummy'

const defaultFilterOptions = {
    device: 1,
    oil: 1,
    text: ''
}

const initialState = {
    filterOption: Object.assign({}, defaultFilterOptions),
    _dataList: fakeControlData,
    // filteredDataList: fakeControlData, //TODO filtereDataList must be derived from dataList. using Filter. easier to do reset? or not?
    filteredDataList: null,
    isManageMode: false,
    isAddAromeo: false,
    isRemoveAromeo: false,
    aromeoStatus: []
};

export default function control(state = initialState, action) {
    switch(action.type){
        case 'FILTER_WITH_TEXT':
            let size = state._dataList.length;
            var filteredList = [];
            for (var index = 0; index < size; index++) {
                var {roomNo} = state._dataList[index];
                if (roomNo.toLowerCase().indexOf(action.value) !== -1) {
                    filteredList.push(state._dataList[index]);
                }
            }

            var newFilterOption = Object.assign({}, state.filterOption);
            newFilterOption['text'] = action.value;

            return {...state, filterOption: newFilterOption, filteredDataList: filteredList};

        case 'FETCHING_DATA':
            return {...state, isFetching: true};

        case 'REQUEST_ERROR':
            return {...state, isFetching: false};

        case 'RECEIVED_AROMEO_STATUS_DATA':
            console.warn("received aromeo status");
            return {...state, isFetching:false, filteredDataList: action.aromeos};
            // return {...state, isFetching:false, filteredDataList: action.data};

        case 'UPDATE_AROMEO_STATUS_VALUE':
            let newFilteredDataList = state.filteredDataList.slice();
            newFilteredDataList[action.index][action.columnKey] = action.value;

            return {...state, filteredDataList: newFilteredDataList}

        // case 'UPDATE_AROMEO_SCHEDULE_VALUE':
        //     let newFilteredDataWithNewSchedule = state.filteredDataList.slice();
        //     newFilteredDataWithNewSchedule[action.index]["schedule_id"] = action.schedule_id;
        //     // newFilteredDataWithNewSchedule[action.index]["schedule_name"] = action.schedule_name;
        //     // console.warn(newFilteredDataWithNewSchedule)
        //     return {...state, filteredDataList: newFilteredDataWithNewSchedule};

        case 'RESET_FILTER_OPTIONS':
            const defaultFilter = Object.assign({}, defaultFilterOptions);
            return {...state, filterOption: defaultFilter}

        case 'TOGGLE_START_MANAGE_AROMEO':
            return {...state, isManageMode: action.value};

        case 'TOGGLE_ADD_AROMEO_DEVICE':
            return {...state, isAddAromeo: action.value};

        case 'TOGGLE_REMOVE_AROMEO_DEVICE':
            return {...state, isRemoveAromeo: action.value};

        // by chloe (updated with new db)
        case 'UPDATE_AROMEO_SCHEDULE':
            var newFilteredDataWithNewSchedule = state.filteredDataList.slice();
            // console.log(newFilteredDataWithNewSchedule);
            // console.log(action.schedule_id);
            // console.log(action.schedule_id[i].schedule_id);
            for (var i = 0; i < Object.keys(newFilteredDataWithNewSchedule).length; i++) {
                newFilteredDataWithNewSchedule[i].schedule_name = action.schedule_id[i].schedule_name;
            }
            return {...state, filteredDataList: newFilteredDataWithNewSchedule};

        case 'TURN_ON_AROMEO':
            var newFilteredDataWithPowerOn = state.filteredDataList.slice();
            for (var i = 0; i < Object.keys(newFilteredDataWithPowerOn).length; i++) {
                newFilteredDataWithPowerOn[i].power_on = (action.power_on[i].power_on);
            }
            return {...state, filteredDataList: newFilteredDataWithPowerOn};
        // done

        default:
            return state;
    }
}
