/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var count = 0,
        diff = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        } else {
            diff++;
        }
    }

    nums.length -= diff;

    return count;
};
