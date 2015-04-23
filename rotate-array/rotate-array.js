/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     k = k % nums.length;

//     while (--k >= 0) {
//         nums.unshift(nums.pop());
//     }
// };


var rotate = function(nums, k) {
    var len = nums.length,
        overflows = [];

    k = k % len;

    for (var i = len - 1; i >= 0; i--) {
        if (len - i <= k)
            overflows.unshift(nums[i]);

        if (i < k)
            nums[i] = overflows.pop();
        else
            nums[i] = nums[i - k];
    }
};
