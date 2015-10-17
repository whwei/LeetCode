
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums, ret) {
    if (!nums || nums.length === 0) return [[]];
    if (nums.length === 1) return [nums, []];

    ret = ret || [];

    nums.sort(compare);
    var next = subsetsWithDup(nums.slice(0, -1));

    next.forEach(function(n) {
        ret.push(n);
        ret.push(n.concat(nums[nums.length - 1]));
    });

    return dedupe(ret);
};

function compare(a, b) { return a < b ? -1 : 1; }
function dedupe(arr) {
    var hash = {}

    return arr.reduce(function(ret, item) {
        if (!hash[item.join('-')]) {
            hash[item.join('-')] = true
            ret.push(item)
        }
        return ret
    }, [])
}
