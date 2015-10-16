/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var strs = str.split(/\s/),
        pts = pattern.split(''),
        i = 0,
        patternHash = {},
        strHash = {}

    if (strs.length !== pts.length) return false

    for (; i < strs.length; i++) {
        if (!patternHash[strs[i]] && !strHash[pts[0]]) {
            patternHash[strs[i]] = pts[0]
            strHash[pts[0]] = strs[i]  
        } if (patternHash[strs[i]]) {
            if (patternHash[strs[i]] !== pts[0]) {
                return false
            } else {
                pts.shift()
            }
        } else {
            return false
        }
    }

    return true
};