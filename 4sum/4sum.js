/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (!nums || nums.length < 4) return [];

    nums.sort(function(a, b) { return a - b < 0 ? -1 : 1; })
    var j, p, k;
    var ret = [];

    for (var i = 0; i < nums.length; ) {
        j = i + 1;

        while (j < nums.length) {
            p = j + 1;
            k = nums.length - 1;

            while(p < k) {
                if (nums[i] + nums[j] + nums[p] + nums[k] === target) {
                    ret.push([nums[i], nums[j], nums[p], nums[k]]);
                    p++;
                    k--;
                    while((p < k) && nums[k] === nums[k+1]) { k--; }
                    while((p < k) && nums[p] === nums[p-1]) { p++; }
                } else if (nums[i] + nums[j] + nums[p] + nums[k] > target) {
                    k--;
                    while((p < k) && nums[k] === nums[k+1]) { k--; }
                } else {
                    p++;
                    while((p < k) && nums[p] === nums[p-1]) { p++; }
                }
            }

            j++;
            while (j < nums.length && nums[j] === nums[j-1]) j++;
        }


        i++;
        while (i < nums.length && nums[i] === nums[i-1]) i++;
    }

    return ret;
};
