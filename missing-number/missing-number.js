/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if (!nums || nums.length === 0) return null

    var sum = (0 + nums.length) * (nums.length + 1) / 2

    nums.forEach(function(num){
        sum = sum - num
    })

    return sum
};
