/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var current = [-Number.MAX_VALUE, 0, -Number.MAX_VALUE, 0]
    var next    = [-Number.MAX_VALUE, 0, -Number.MAX_VALUE, 0]
    var temp,
        i

    for (i = 0; i < prices.length; i++) {
        // buy
        next[0] = Math.max(current[0], -1 * prices[i])
        // buy, sell
        next[1] = Math.max(current[1], current[0] + prices[i])
        // buy, sell, buy
        next[2] = Math.max(current[2], current[1] - prices[i])
        // buy, sell, buy, sell
        next[3] = Math.max(current[3], current[2] + prices[i])

        temp = current
        current = next
        next = temp
    }

    // compare once and twice
    return Math.max(current[1], current[3])
};


