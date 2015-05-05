/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// cheating
// var myPow = function(x, n) {
//     return Math.pow(x, n);
// };

var myPow = function(x, n) {
    if (n === 0) { return 1; }
    if (n < 0) {
        n = -1 * n;
        x = 1 / x;
    }

    var half = myPow(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        return half * half;
    } else {
        return x * half * half;
    }
}
