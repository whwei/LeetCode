/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (k === 0 || prices.length <= 1) return 0
    var l = Math.min(Math.floor(prices.length / 2), k)
    var current = initState(l)
    var next    = initState(l)
    var temp,
        i,
        p

    for (i = 0; i < prices.length; i++) {
        next[0] = Math.max(current[0], -prices[i])
        for (p = 1; p < next.length; p++) {
            next[p] = Math.max(current[p], current[p - 1] + (p % 2 === 0 ? -prices[i] : prices[i]))
        }

        temp = current
        current = next
        next = temp
    }

    return Math.max.apply(null, current.filter(function(n, i) { return i % 2 !== 0 }))
};

function initState(k) {
    var ret = [],
        i

    for (i = 0; i < k; i++) {
        ret.push(-Number.MAX_VALUE)
        ret.push(0)
    }

    return ret
}
