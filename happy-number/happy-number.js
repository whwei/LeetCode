/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (typeof n !== 'number') { return false; }

    if (n < 0) { return false; }

    var hash = {},
        sum = n;

    while (sum !== 1) {
        sum = ('' + sum).split('').reduce(function(acc, d) {
            return acc + d * d;
        }, 0);

        if (hash[sum]) return false;
        else           hash[sum] = true;
    }

    return true;
};
