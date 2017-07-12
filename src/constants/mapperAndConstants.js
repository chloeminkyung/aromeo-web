const idToOil = {
    1: 'Lavender',
    2: 'Peppermint',
    3: 'Lemon',
    4: 'YlangYlang',
    5: 'Bergamot'
}

const oilToId = {
    'Lavender': 1,
    'Peppermint': 2,
    'Lemon': 3,
    'YlangYlang': 4,
    'Bergamot': 5
}

export function oilToIdMapper(oilName){
    return oilToId[oilName];
}

export function idToOilNameMapper(id){
    return idToOil[id];
}

export const durations = [
    15, 30, 45, 60, 90, 120, 150, 180
]

export function durationNumToDurationString(durationNum){
    let min = durationNum % 60;
    let hr = Math.floor(durationNum / 60);
    return hr + " hr " + min + " min";
}
