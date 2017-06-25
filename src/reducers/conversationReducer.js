/**
 * Created by nylee on 6/11/16.
 */
var _ = require('underscore');

const initialState = {
    isFetchingResponse: false,
    convList: [],
    response: null,
};

export default function conversation(state = initialState, action) {
    switch(action.type){
        case 'ADD_USER_QUESTION':
            var newConvList = state.convList.slice()
            newConvList.push({user: action.value, chatbot: null});
            return {isFetchingResponse: true, convList: newConvList, response: state.response};

        case 'ADD_CHATBOT_RESPONSE':
            var response = action.value;
            // console.warn(response)
            var newConvList = state.convList.slice();

            if(response['type'].localeCompare('SEQ2SEQ')==0){
                newConvList[newConvList.length - 1]["chatbot"] = response['answer'].slice(0,-5);
            }else{
                newConvList[newConvList.length - 1]["chatbot"] = response['answer'];
            }
            return {isFetchingResponse: false, convList: newConvList, response: response};

        default:
            return state;
    }
}
