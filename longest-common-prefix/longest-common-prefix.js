/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return ''

    return strs.reduce(function(pattern, s) {
        return common(s, pattern)
    })
};

function common(s, pattern) {
    var i = 0,
        len = Math.min(s.length, pattern.length)

    for (; i < len; i++) {
        if (s[i] !== pattern[i])
            return s.substring(0, i);
    }

    return s.substring(0, len);
}
