/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || nums.length === 0) return 0;

    // allow `max` more duplicates
    var max = 1

    var p = 1, i = 0, start, next = 0

    for (; p < nums.length;) {
        if (nums[p - 1] === nums[p]) {
            if (next < max) {
                p++
                next++
                continue
            } else {
                nums.splice(p, 1)
            }
        } else {
            next = 0
            p++
        }
    }

    return nums.length
};
