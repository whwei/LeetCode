/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var c = [],
        op1, op2,
        overflow = 0,
        n,
        i = a.length - 1,
        j = b.length - 1;

    while (i >= 0 || j >= 0 || overflow !== 0) {
        op1 = a[i] ? +a[i--] : 0;
        op2 = b[j] ? +b[j--] : 0;

        n = op1 + op2 + overflow;
        overflow = n > 1 ? 1 : 0;

        c.push(n % 2);
    }

    return c.reverse().join('');

};
