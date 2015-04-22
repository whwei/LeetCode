/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var nBinaryArray = (n >>> 0).toString(2).split('');

    var paddingNumber = 32 - nBinaryArray.length;
    while (--paddingNumber >= 0) {
        nBinaryArray.unshift('0');
    }

    return parseInt(nBinaryArray.reverse().join(''), 2);
};
