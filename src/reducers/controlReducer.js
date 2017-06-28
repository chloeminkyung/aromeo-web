var _ = require('underscore');
import {fakeControlData} from '../constants/dummy'

const defaultFilterOptions = {
    device: 1,
    oil: 1,
    text: ""
}

const initialState = {
    filterOption: defaultFilterOptions,
    _dataList: fakeControlData,
    filteredDataList: fakeControlData, //TODO filtereDataList must be derived from dataList. using Filter. easier to do reset? or not?
    isManageMode: false,
    isAddAromeo: false,
    isRemoveAromeo: false
};

export default function control(state = initialState, action) {
    switch(action.type){
        case 'FILTER_WITH_TEXT':
            var size = state._dataList.length;
            var filteredList = [];
            for (var index = 0; index < size; index++) {
                var {roomNo} = state._dataList[index];
                if (roomNo.toLowerCase().indexOf(action.value) !== -1) {
                    filteredList.push(state._dataList[index]);
                }
            }
            return {...state, text: action.value, filteredDataList: filteredList};

        case 'START_MANAGE_AROMEO':
            return {...state, isManageMode: true};

        case 'ADD_AROMEO_DEVICE':
            return {...state, isAddAromeo: true};

        case 'REMOVE_AROMEO_DEVICE':
            return {...state, isRemoveAromeo: true};

        default:
            return state;
    }
}
