
export function base64ToSrcFormatter(base64string){
    var srcFormat = "data:image/png;base64,(base64url)";
    return srcFormat.replace('(base64url)', base64string);
}

export function longQueryFormatter(normalQueryString){
    // TODO punctuation-handling not yet done
    // var queryTokens = normalQueryString.replace(".", ' . ').replace(",", ' , ').replace("?", ' ? ').replace("!", ' ! ').split(' ');
    var queryTokens = normalQueryString.split(' ');

    if(queryTokens.length >1)
        return queryTokens.join('+');
    else
        return queryTokens
}