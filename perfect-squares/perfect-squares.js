
/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n, store) {
    store = store || {}

    if (store[n] !== undefined) return store[n]

    var r = Math.floor(Math.sqrt(n)),
        min = Number.MAX_VALUE - 1

    if (r * r === n) {
        store[n] = 1
        return 1
    }

    for (var i = r; i >= 1; i--) {
        min = Math.min(min, numSquares(n - i * i, store))
    }

    store[n] = min + 1

    return min + 1
};

