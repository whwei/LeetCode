/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var overflow = 1;

    var i = digits.length - 1,
        d;

    while (i >= 0) {
        d = +digits[i] + overflow;
        digits[i] = d % 10;
        overflow = Math.floor(d / 10);
        if (overflow === 0) break;
        i--;
    }

    if (overflow !== 0) {
        digits.unshift(overflow);
    }

    return digits;
};
