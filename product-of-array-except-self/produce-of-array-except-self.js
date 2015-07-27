/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (!nums) return [];

    var zeros = 0;

    var total = nums.reduce(function(acc, n) {
        if (n === 0) zeros++;

        return acc * (zeros > 1 ? 0 : (n === 0 ? 1 : n));
    }, 1);

    return nums.map(function(n, i) {
       if (n === 0) {
           if (zeros > 1) return 0;
           if (zeros === 1) return total;
       } else {
           return zeros > 0 ? 0 : total / n;
       }
    });
};
