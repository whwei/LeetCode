/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return x;

    var positive = x > 0 ? true : false;
    var start = false;
    var UPPER = 2147483647;
    var LOWER = 2147483648;

    x = Math.abs(x);

    var ret = ('' + x).split('')
                        .reverse()
                        .filter(function(d) { if (d !== '0') start = true; return start || d !== '0'; })
                        .join('');

    ret = +ret;

    if (positive) {
        if (ret > UPPER) return 0;
    } else {
        if (ret > LOWER) return 0;
    }

    return positive ? ret : -1 * ret;
};
