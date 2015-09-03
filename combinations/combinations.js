
var combine = function(n, k) {
    if (k < 1 || n < 1) return []
    var ret = []

    combination(n, k, ret, [])

    return ret
};

function combination(n, k, ret, prefix) {
    if (k === 0) {
        ret.push(prefix)
        return
    }

    var i = prefix.length > 0 ? prefix[prefix.length - 1] + 1 : 1

    if (i > n) return

    for (; i <= n; i++) {
        combination(n, k - 1, ret, prefix.concat(i))
    }
}
