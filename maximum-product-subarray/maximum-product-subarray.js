/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (!nums || nums.length === 0) return null
    if (nums.length === 1) return nums[0]

    var i,
        ret = nums[0],
        max = ret,
        min = ret,
        prevmin

    return nums.reduce(function(ret, n) {
        if (n > 0) {
            max = Math.max(n, max * n)
            min = Math.min(n, min * n)
        } else {
            prevmin = min
            min = Math.min(max * n, n)
            max = Math.max(prevmin * n, n)
        }

        return Math.max(ret, max)
    })
};
