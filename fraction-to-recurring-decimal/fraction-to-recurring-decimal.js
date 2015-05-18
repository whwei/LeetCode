
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (denominator === 0) return null

    var sign = numerator * denominator >= 0 ? '' : '-';

    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    var ret = sign + (numerator < denominator ? '0' : Math.floor(numerator / denominator));

    var remain = numerator % denominator;

    if (remain === 0) return ret;
    else ret += '.';

    var hash = {};
    while (!hash[remain]) {
        hash[remain] = ret.length;
        ret += Math.floor(10 * remain / denominator);
        remain = 10 * remain % denominator;
    }

    var arr = ret.split('');
    arr.splice(hash[remain], 0, '(');
    arr.push(')');

    return arr.join('').replace('(0)', '');
};
