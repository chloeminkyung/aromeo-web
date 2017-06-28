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

        default:
            return state;
    }
}
