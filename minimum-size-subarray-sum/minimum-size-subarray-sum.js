/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (!nums || nums.length === 0) return 0

    var i,
        min = Number.MAX_VALUE,
        p = 0,
        sum = 0

    for (i = 0; i < nums.length; i++) {
        sum += nums[i]

        while (sum >= s) {
            min = Math.min(min, i - p + 1)

            sum -= nums[p]
            p++
        }
    }

    return min === Number.MAX_VALUE ? 0 : min
};
