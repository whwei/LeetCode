/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums || nums.length === 0) return null
    if (nums.length === 1) return nums[0]

    var sum = 0,
        max = -Number.MAX_VALUE

    nums.forEach(function(n) {
        sum += n
        if (sum > max) max = sum
        if (sum < 0) sum = 0
    })

    return max
};

var maxSubArray = function(nums) {
    if (!nums || nums.length === 0) return null
    if (nums.length === 1) return nums[0]

    var max, currentMax
    max = currentMax = -Number.MAX_VALUE

    nums.forEach(function(n) {
        currentMax = currentMax > 0 ? (currentMax + n) : n
        max = Math.max(currentMax, max)
    })

    return max
};
