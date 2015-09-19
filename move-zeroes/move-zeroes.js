/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (!nums || nums.length === 0) return
    if (nums.length === 1) return

    var i, next = 0, from, result

    for (i = 0; (from = findFrom(nums, i)) !== null;) {
        result = forward(nums, next, from)
        next = result[0]
        i = result[1]
    }

    if (i === 0) return

    while (nums[next] !== undefined) {
        nums[next] = 0
        next++
    }

};

function findFrom(nums, start) {
    for (; nums[start] == 0 && nums[start] !== undefined; start++) {}

    return nums[start] !== undefined ? start : null
}

function forward(nums, targetIndex, start) {
    for (; nums[start] != 0 && nums[start] !== undefined; targetIndex++, start++) {
        nums[targetIndex] = nums[start]
    }
    return [targetIndex, start]
}
