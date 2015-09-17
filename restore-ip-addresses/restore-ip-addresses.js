/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    return dedupe(insertDots(s, 3))
};

function insertDots(s, dots) {
    if (!s || s.length === 0 || dots < 0 || s.length > 3 * (dots + 1)) return []
    if (dots === 0 && check(s)) return [s]

    var ret = [],
        pre

    var i = 0
    while (i++ < 3) {
        pre = s.substr(0, i)
        if (check(pre)) {
            pre = normalize(pre)
            insertDots(s.substr(i), dots - 1).forEach(function(c) {
                if (c) ret.push(pre + '.' + c)
            })
        }
    }

    return ret
}

function normalize(s) {
    return String(+s)
}

function check(s) {
    var ns = Number(s)
    return ns >= 0 && ns <= 255 && s === normalize(s)
}

function dedupe(arr) {
    var hash = Object.create(null)
    var ret = []

    arr.forEach(function(item) {
        if (!hash[item]) ret.push(item)
        hash[item] = true
    })

    return ret
}
