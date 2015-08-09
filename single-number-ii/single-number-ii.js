/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var b0 = 0,
        b1 = 0,
        r = 0;

    nums.forEach(function(n) {
        // calc b1 first here is important.
        b1 = b1 | (b0 & n);
        b0 = b0 ^ n;
        r = b1 & b0;
        b1 = b1 ^ r;
        b0 = b0 ^ r;
    });

    return b0;
};

/**
 * Generalization
 * -----------------------------------------------------------------
 * https://leetcode.com/discuss/31595/detailed-explanation-generalization-bitwise-operation-numbers
 */


