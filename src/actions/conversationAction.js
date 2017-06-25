import {longQueryFormatter} from '../constants/Utility';

var axios = require('axios');
const queryRoute = 'https://202.155.224.140:3721/api/ask?question=(q)&sessionid=1';
// const queryRoute = 'http://hltpsvr5.cse.ust.hk:8200/api/ask?question=(q)&sessionid=1';

export function addUserQuestion(userSpeech) {
    return {
        type: 'ADD_USER_QUESTION',
        value: userSpeech
    }
}

function receiveChatBotResponse(chatbotSpeechJson){
    console.warn(chatbotSpeechJson)
    return{
        type: 'ADD_CHATBOT_RESPONSE',
        value: chatbotSpeechJson.data,
    }
}

function requestFail(error){
    return{
        type: 'REQUEST_ERROR',
        error: error
    }
}

export function startConv(userQuery) {
    const processedUserQuery = longQueryFormatter(userQuery);
    console.warn("processedUserQuery",processedUserQuery);
    const api = queryRoute.replace('(q)',processedUserQuery);
    return dispatch=>{
        dispatch(addUserQuestion(userQuery));
        return axios.get(api).then(json=>dispatch(receiveChatBotResponse(json))).catch(err=>dispatch(requestFail(err)))
    }
}
