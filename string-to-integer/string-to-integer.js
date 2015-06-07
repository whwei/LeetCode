/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var MAX = 2147483647,
        MIN = -2147483648;

    var ts = str.trim();

    if (!ts) return 0;

    var s = ts.split(/\s+/)[0],
        result = s.match(/^(([+|-])?\d+)/);

    if (result === null) return 0;

    var digits = result[1].replace(/[+|-]/g, '').split('');

    if (overflow(digits, result[2] === '-')) {
        return result[2] === '-' ? MIN : MAX;
    } else {
        return +((result[2] ? result[2] : '') + digits.join(''));
    }

    return ret;
};

function overflow(digits, minus) {
    var MAX = '2147483647',
        MIN = '2147483648',
        LEN = MAX.length;

    if (digits.length > LEN) return true;

    if (digits.length === LEN) {
        var test = minus ? MIN : MAX;
        return !digits.some(function(d, i) {
            return +d < +test[i];
        });
    } else {
        return false;
    }
}
