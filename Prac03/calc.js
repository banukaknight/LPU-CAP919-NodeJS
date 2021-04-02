console.log("calc.js file is called\n");

function getSum(a, b) {
    return a+b;   // returns sum
}
function getDiff(a, b) {
    return a-b;   // returns sum
}
function getMult(a, b) {
    return a*b;   // returns sum
}
function getDiv(a, b) {
    return a/b;   // returns sum
}

module.exports.getSum = getSum;
module.exports.getDiff = getDiff;
module.exports.getMult = getMult;
module.exports.getDiv = getDiv;
