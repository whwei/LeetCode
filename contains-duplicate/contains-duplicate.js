/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (!nums) return null;

    var hash = {};

    var i = 0,
        len = nums.length;

    for (; i < len; i++) {
        if (hash[nums[i]] === true) {
            return true;
        } else {
            hash[nums[i]] = true;
        }
    }

    return false;
};
