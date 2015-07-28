/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || nums.length === 0) return 0;

    var p = 1, i = 0, start

    for (; p < nums.length; p++) {
        if (nums[i] === nums[p]) {
            if (!start) start = i + 1
            continue
        } else {
            if (start) {
                if (nums[start] < nums[p]) {
                    swap(nums, start, p)
                    start = start + 1
                }
            }

            i++
        }
    }

    return i + 1
};

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
