/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    if (!nums || nums.length === 0) return [];

    var diff = nums.reduce(function(acc, n) {
        return acc ^ n;
    }, 0);

    // a & b are different at this bit
    diff = diff & -diff;

    var ret = [0, 0];

    nums.forEach(function(n) {
        if (n & diff) {
            ret[0] ^= n;
        } else {
            ret[1] ^= n;
        }
    });

    return ret;
};

/**
 * diff = diff & ~(diff - 1): Get the rightmost position of bit where a and b differ.
 */
