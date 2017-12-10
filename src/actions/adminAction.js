var axios = require('axios');

export function setToggleId(toggle_id){
    return{
        type: 'SET_TOGGLE_ID',
        toggleId: toggle_id
    }
}