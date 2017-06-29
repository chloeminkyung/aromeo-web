
export function filterWithText(text) {
    return {
        type: 'FILTER_WITH_TEXT',
        value: text
    }
}

export function startManageAromeo() {
    return {
        type: 'START_MANAGE_AROMEO',
    }
}

export function stopManageAromeo() {
    return {
        type: 'STOP_MANAGE_AROMEO',
    }
}

export function addAromeoDevice() {
    return {
        type: 'ADD_AROMEO_DEVICE',
    }
}

export function removeAromeoDevice() {
    return {
        type: 'REMOVE_AROMEO_DEVICE',
    }
}
