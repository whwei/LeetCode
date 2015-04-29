/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;

    var min = prices[0],
        max = 0;

    var i = 1,
        len = prices.length;

    for (; i < len; i++) {
        min = Math.min(min, prices[i]);

        max = Math.max(max, prices[i] - min);
    }

    return max;
};
