/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (!nums || nums.length < 3) return [];

    nums.sort(function(a, b) { return a - b < 0 ? -1 : 1; })
    var j, k;
    var tempSum;
    var ret = {
        diff: Number.MAX_VALUE,
        sum: 0
    }

    for (var i = 0; i < nums.length; ) {
        j = i + 1;
        k = nums.length - 1;

        while(j < k) {
            tempSum = nums[i] + nums[j] + nums[k]

            if (Math.abs(tempSum - target) <= Math.abs(ret.diff)) {
                if (tempSum - target === 0) {
                    return tempSum
                } else {
                    ret = {
                        diff: tempSum - target,
                        sum: tempSum
                    }
                }

                if (ret.diff < 0)
                    j++;
                if (ret.diff > 0)
                    k--;
            } else if (tempSum - target > 0) {
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

    return ret.sum;
};
