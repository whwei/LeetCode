/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var zeros = 0;
    while (n) {
        zeros += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }

    return zeros;
};
