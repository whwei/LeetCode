/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.min(nums[0], nums[1]);

    var p = Math.floor(nums.length / 2),
        last = nums.length - 1;

    if (nums[last] === nums[p]) {
        return Math.min(
            findMin(nums.slice(p + 1, last + 1)),
            findMin(nums.slice(0, p + 1))
        );
    } else if(nums[last] < nums[p]) {
        return findMin(nums.slice(p + 1, last + 1));
    } else {
        return findMin(nums.slice(0, p + 1));
    }
};
