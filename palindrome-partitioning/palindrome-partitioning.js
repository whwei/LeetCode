/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s, pre, ret) {
    if (!s) return []

    ret = ret || []
    pre = pre || []

    if (s.length === 1) {
        ret.push(pre.concat(s))
        return ret
    }

    var p
    for (var i = 1; i < s.length; i++) {
        p = s.slice(0, i)

        if (isPalindrome(p)) partition(s.slice(i), pre.concat(p), ret)
    }

    if (isPalindrome(s)) ret.push(pre.concat(s))

    return ret
};

function isPalindrome(s) {
    if (!s) return false
    if (s.length === 1) return true

    var len = s.length / 2

    for (var i = 0; i < len; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false
    }

    return true
}

