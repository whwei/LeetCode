/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) return 0
    if (nums.length === 1) return nums[0]

    return Math.max(robList(nums.slice(1)), robList(nums.slice(0, -1)))
}

var robList = function(nums) {
    return nums.reduce(function(prev, n) {
        return [prev[1], Math.max(prev[1], prev[0] + n)];
    }, [0, 0])[1];
};