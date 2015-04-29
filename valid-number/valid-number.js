
/**
 * @param {string} s
 * @return {boolean}
 */
 // cheating
//  var isNumber = function(s) {
//     if (/^\s*$/.test(s)) return false;
//     return !isNaN(s);
// };


var isNumber = function(s) {
    return isInteger(s) || isFloat(s) || isExp(s);
};

function isInteger(s) {
    return /^\s*[+-]?\d+\s*$/.test(s);
}

function isFloat(s) {
    return /^\s*(([+-]?\d+\.\d+)|([+-]?\d+\.)|([+-]?\.\d+))\s*$/.test(s);
}

function isExp(s) {
    var split = s.split(/[eE]/);
    if (split.length !== 2) return false;
    if (split[0].substr(-1) === ' ' || split[1][0] === ' ') return false;
    console.log(split)
    return (isFloat(split[0]) || isInteger(split[0])) && isInteger(split[1]);
}
