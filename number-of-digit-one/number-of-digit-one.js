/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    var count = 0,
        i,
        r,
        m

    for (i = 1; i <= n; i *= 10) {
        r = Math.floor(n / i)
        m = n % i

        count += Math.floor((r + 8) / 10) * i + (r % 10 === 1 ? m + 1 : 0)
    }

    return count
};
