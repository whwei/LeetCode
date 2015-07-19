/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var open = n,
        close = n

    var sq = '',
        ret = []

    return find(open, close, sq, ret)
}

function find(open, close, sq ,ret) {
    if (open > 0) {
        find(open - 1, close, sq + '(', ret)
    }
    // if remaining close parentheses is no greater than open parentheses, skip it
    if (close > open) {
        find(open, close - 1, sq + ')', ret)
    }
    if (!close) {
        ret.push(sq)
    }

    return ret;
}
