/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (!nums || nums.length < 3) return [];

    nums.sort(function(a, b) { return a - b < 0 ? -1 : 1; })
    var j, k;
    var ret = [];

    for (var i = 0; i < nums.length; ) {
        j = i + 1;
        k = nums.length - 1;

        while(j < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                ret.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while((j < k) && nums[k] === nums[k+1]) { k--; }
                while((j < k) && nums[j] === nums[j-1]) { j++; }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
                while((j < k) && nums[k] === nums[k+1]) { k--; }
            } else {
                j++;
                while((j < k) && nums[j] === nums[j-1]) { j++; }
            }
        }

        i++;
        while (i < nums.length && nums[i] === nums[i-1]) i++;
    }

    return ret;
};
