/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    var hash = {};

    var i = 0,
        n,
        len = nums.length;

    for (; i < len; i++) {
        n = nums[i];

        if (hash[n] !== undefined && Math.abs(i - hash[n]) <= k) {
            return true;
        } else {
            hash[n] = i;
        }
    }

    return false;
};
