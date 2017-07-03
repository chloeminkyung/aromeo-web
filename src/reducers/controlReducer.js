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
    filteredDataList: fakeControlData, //TODO filtereDataList must be derived from dataList. using Filter. easier to do reset? or not?
    isManageMode: false,
    isAddAromeo: false,
    isRemoveAromeo: false
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

        case 'RESET_FILTER_OPTIONS':
            console.warn("default option" + JSON.stringify(defaultFilterOptions));

            const defaultFilter = Object.assign({}, defaultFilterOptions);
            console.warn("new default option" + JSON.stringify(defaultFilter));

            return {...state, filterOption: defaultFilter}

        case 'TOGGLE_START_MANAGE_AROMEO':
            return {...state, isManageMode: action.value};

        case 'TOGGLE_ADD_AROMEO_DEVICE':
            return {...state, isAddAromeo: action.value};

        case 'TOGGLE_REMOVE_AROMEO_DEVICE':
            return {...state, isRemoveAromeo: action.value};

        default:
            return state;
    }
}
