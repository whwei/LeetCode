/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums, start, end) {
    if (!nums || nums.length === 0) return null;

    start = start !== undefined ? start : 0;
    end = end !== undefined ? end : nums.length - 1;

    if (end === start) return end;

    var mid = Math.floor((start + end) / 2),
        midValue = nums[mid],
        rightValue = mid + 1 > end ? -Number.MAX_VALUE : nums[mid + 1];

    if (midValue > rightValue) {
        return findPeakElement(nums, start, mid);
    } else {
        return findPeakElement(nums, mid + 1, end);
    }
};
