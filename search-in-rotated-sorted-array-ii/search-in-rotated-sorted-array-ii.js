/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if (!nums || nums.length === 0) return false

    var l = 0, r = nums.length - 1, mid

    while (l <= r) {
        mid = Math.floor((l + r) / 2)

        if (nums[mid] === target) return true

        while (l < mid && nums[l] == nums[mid]) l += 1

        if (nums[l] <= nums[mid]) {
            if (target >= nums[l] && target < nums[mid])
                r = mid - 1
            else
                l = mid + 1
        } else {
            if (target > nums[mid] && target <= nums[r])
                l = mid + 1
            else
                r = mid - 1
        }
    }

    return false
};
