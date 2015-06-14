/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var rn = 0,
        bn = nums.length - 1;

    var i = 0,
        j = 0,
        len = nums.length;

    for (; i< len;) {
        switch (nums[i]) {
            case 0:
                if (rn !== i) {
                    swap(nums, i, rn);
                    rn++;
                } else {
                    i++;
                }
                break;
            case 1:
                i++
                break;
            case 2:
                if (i <= bn) {
                    swap(nums, i, bn);
                    bn--;
                } else {
                    i++;
                }
                break;
            default:
        }
    }
};


function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
