
export function filterWithText(text) {
    return {
        type: 'FILTER_WITH_TEXT',
        value: text
    }
}

export function resetFilterOptions(){
    return {
        type: 'RESET_FILTER_OPTIONS'
    }
}

export function toggleStartManageAromeo(startBool) {
    return {
        type: 'TOGGLE_START_MANAGE_AROMEO',
        value: startBool
    }
}

export function toggleAddAromeoDevice(addBool) {
    return {
        type: 'TOGGLE_ADD_AROMEO_DEVICE',
        value: addBool
    }
}

export function toggleRemoveAromeoDevice(removeBool) {
    return {
        type: 'TOGGLE_REMOVE_AROMEO_DEVICE',
        value: removeBool
    }
}
