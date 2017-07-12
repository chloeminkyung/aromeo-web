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
