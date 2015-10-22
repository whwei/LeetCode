/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return search(nums, 0, nums.length, target)
};

function search(nums, l, r, target) {
    if (l >= r) return [-1, -1]

    var m = Math.floor((l + r) / 2),
        ret = [m, m],
        tl, tr

    if (nums[m] === target) {
        // l...m
        tl = search(nums, l, m, target)[0]
        // m+1...r
        tr = search(nums, m + 1, r, target)[1]
        if (tl !== -1) ret[0] = tl
        if (tr !== -1) ret[1] = tr
        return ret
    } else if (nums[m] > target) {
        return search(nums, l, m, target)
    } else {
        return search(nums, m + 1, r, target)
    }
}
