/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {

    const filtered = objects.filter(obj => (obj.x == obj.y) ? obj : undefined)

    return filtered.length
}

let object0 = {
    x: 1    ,
    y: 1
}
let object1 = {
    x: 2,
    y: 3
}
let object2 = {
    x: 3,
    y: 3
}
let object3 = {
    x: 3,
    y: 4
}
let object4 = {
    x: 4,
    y: 5
}

const objects = [object0, object1, object2, object3, object4]
getCount(objects)