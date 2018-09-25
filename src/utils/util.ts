export function shallowClone(object: any) {
    return JSON.parse(JSON.stringify(object));
}