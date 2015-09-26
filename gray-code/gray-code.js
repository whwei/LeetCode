
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var len = 1 << n,
        ret = []

    for (var i = 0; i < len; i++) {
        ret[i] = (i >> 1) ^ i
    }

    return ret
};
