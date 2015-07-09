/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n == null || n <= 0) return false;

    var c = n.toString(2).split('').reduce(function(count, d) {
        if (d === '1')
            return count + 1;
        else
            return count
    }, 0);

    return c === 1;
};
