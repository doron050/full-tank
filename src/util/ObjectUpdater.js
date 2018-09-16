export function updateValue(oldObject, key, value){
    return Object.assign({}, oldObject, {
        [key]: value
    });
}