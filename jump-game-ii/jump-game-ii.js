/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (!nums) return null
    if (nums.length === 1) return 0

    var jump = 1
    var current = 0
    var max = nums[0]
    var tempMax

    while(max < nums.length - 1) {
        tempMax = max
        max = expand(nums, current, max)
        current = tempMax
        jump++
    }

    return jump
};

function expand(nums, start, end) {
    var max = start

    for (var i = start; i <= end; i++) {
        if (nums[i] + i >= nums[max] + max) {
            max = i
        }
    }

    return nums[max] + max
}
