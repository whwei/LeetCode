/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    var d = 1;
    while (x / d >= 10) d *= 10;

    var front, end;
    while (x !== 0) {
        front = (x / d) >> 0;
        end = x % 10;
        if (front !== end) return false;
        x = ((x - front * d) / 10) >> 0;
        d = (d / 100) >> 0;
    }

    return true;
};
