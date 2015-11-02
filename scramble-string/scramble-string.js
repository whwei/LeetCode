/*
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2, store) {
    store = store || {}
    var key = s1 + '-' + s2
    if (store[key] !== undefined) return store[key]

    if (!s1 || !s2) return false
    if (s1.length !== s2.length) return false
    if (s1.length === 1 && s1 !== s2) return false
    if (s1 === s2) return true
    if (s1.split('').reverse().join('') === s2) return true

    var len = s1.length

    for (var i = 1; i < len; i++) {
        if (same(s1, s2, i, store) || reverse(s1, s2, i, store)) {
            store[key] = true
            return true
        }
    }

    store[key] = false
    return false
};

function same(s1, s2, i, store) {
    return isScramble(s1.substring(0, i), s2.substring(0, i), store) &&
            isScramble(s1.substring(i), s2.substring(i), store)
}

function reverse(s1, s2, i, store) {
    return isScramble(s1.substring(0, i), s2.substring(s2.length - i), store) &&
            isScramble(s1.substring(i), s2.substring(0, s2.length - i), store)
}


