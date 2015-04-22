/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var hash = {},
        len = nums.length,
        half = len / 2,
        n;

    for (var i = 0; i < len; i++) {
        n = nums[i];

        if (hash[n] !== undefined) {
            hash[n]++;
        } else {
            hash[n] = 1;
        }

        if (hash[n] > half) {
            return n;
        }
    }
};
