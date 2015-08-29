
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
    if (!nums) return []
    if (nums.length === 0) return []
    if (nums.length === 1) return [nums]

    var ret = []

    nums.forEach(function(n, i) {
        permute(nums.slice(0, i).concat(nums.slice(i + 1))).forEach(function(nn){
            ret.push([n].concat(nn))
        })
    })

    return ret
};
