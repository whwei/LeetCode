/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums, ret) {
    if (!nums || nums.length === 0) return [[]];
    if (nums.length === 1) return [nums, []];

    ret = ret || [];

    nums.sort(compare);
    var next = subsets(nums.slice(0, -1));

    next.forEach(function(n) {
        ret.push(n);
        ret.push(n.concat(nums[nums.length - 1]));
    });

    return ret;
};

function compare(a, b) { return a < b ? -1 : 1; }
