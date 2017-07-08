var axios = require('axios');

export function toggleCreateDefaultSchedule(isOpen) {
    return {
        type: 'TOGGLE_CREATE_DEFAULT_SCHEDULE',
        isOpen: isOpen
    }
}

export function createDefaultSchedule(scheduleDetail) {
    return {
        type: 'CREATE_DEFAULT_SCHEDULE',
        scheduleDetail: scheduleDetail
    }
}

export function editDefaultSchedule(scheduleId, scheduleDetail) {
    return {
        type: 'EDIT_DEFAULT_SCHEDULE',
        scheduleId: scheduleId,
        scheduleDetail: scheduleDetail
    }
}

export function removeDefaultSchedule(scheduleId) {
    return {
        type: 'REMOVE_DEFAULT_SCHEDULE',
        scheduleId: scheduleId
    }
}

export function toggleCreateBlend(isOpen) {
    return {
        type: 'TOGGLE_CREATE_BLEND',
        isOpen: isOpen
    }
}

export function createBlend(blendDetail) {
    return {
        type: 'CREATE_BLEND',
        blendDetail: blendDetail
    }
}

export function editBlend(blendId, blendDetail) {
    return {
        type: 'EDIT_BLEND',
        blendId: blendId,
        blendDetail: blendDetail
    }
}

export function removeBlend(blendId) {
    return {
        type: 'REMOVE_BLEND',
        blendId: blendId
    }
}