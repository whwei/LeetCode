/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices.length === 0) return 0;

    var total = 0;

    for (var i = 1; i < prices.length; i++) {
        total += prices[i] - prices[i-1] > 0 ? prices[i] - prices[i-1] : 0;
    }

    return total;
};
