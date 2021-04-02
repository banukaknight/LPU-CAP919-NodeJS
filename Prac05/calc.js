//console.log("calc.js file is called\n");
function getSum(a, b) {
    return a+b;   // returns sum
}
function getDiff(a, b) {
    return a-b;   // returns dif
}
function getMult(a, b) {
    return a*b;   // returns mult
}
function getDiv(a, b) {
    return a/b;   // returns div
}

module.exports = {getSum, getDiff, getMult, getDiv};

// module.exports.getSum = getSum;
// module.exports.getDiff = getDiff;
// module.exports.getMult = getMult;
// module.exports.getDiv = getDiv;
