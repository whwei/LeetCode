/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits, prefix, arr) {
    if (!digits) return [];

    var map = {
        '1': [''],
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z'],
        '0': [' '],
    }

    arr = arr || [];
    prefix = prefix || '';

    if (digits.length === 1) {
        map[digits[0]].forEach(function(d) {
            arr.push(prefix + d);
        })
    } else {
        map[digits[0]].forEach(function(d) {
            letterCombinations(digits.substr(1), prefix + d, arr);
        })
    }

    return arr;
};
