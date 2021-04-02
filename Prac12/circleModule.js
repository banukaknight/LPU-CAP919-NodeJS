console.log("circleModule.js file is loaded.\n");

function getArea(r) {
    return Math.PI * r; //return area
}

function getCircumference(r) {
    return Math.PI * 2 * r; //return Circumference
}

function getDiameter(r) {
    return 2 * r; //return Diameter
}

module.exports.getArea = getArea;
module.exports.getCircumference = getCircumference;
module.exports.getDiameter = getDiameter;