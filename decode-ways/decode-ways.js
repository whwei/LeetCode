
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s, store) {
    if (s.length === 0) return 0;
    if (s.length === 1) {
        if (s[0] === '0') return 0;
        else return 1;
    }

    store = store || [];
    if (store[s] !== undefined) return store[s];

    var ret = 0,
        twoDigit = 0,
        oneDigit = 0;

    if (+s.slice(0,2) <= 26 && +s.slice(0,2) >= 10)
        twoDigit = s.substr(2) === '' ? 1 : numDecodings(s.substr(2), store);

    if (s[0] !== '0')
        oneDigit = s.substr(1) === '' ? 1 : numDecodings(s.substr(1), store);

    ret = oneDigit + twoDigit;

    store[s] = ret;

    return ret;
};

/*
 * subproblem: D(s) # of ways to decode a string s
 * recurrence: 1) first two digits of s can be decoded to a single character, D(s) = 1 * D(s + 2) + 1 * D(s + 1)
 *             2) first two digits can not be decoded to a valid character, D(s) = 1 * D(s + 1)
 * base case: D('') = 0
 *            D('0') = 0
 *
 * NOTE: D('330') = 0, D('01') = 0
 */
