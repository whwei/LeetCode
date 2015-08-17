/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num === 0) return 0;

    var index = num % 9;

    return index === 0 ? 9 : index;
};
