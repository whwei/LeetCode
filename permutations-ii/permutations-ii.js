/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (!nums) return []
    if (nums.length === 0) return []
    if (nums.length === 1) return [nums]

    var ret = [],
        permutation,
        last,
        hash = {}


    nums.forEach(function(n, i) {
        if (!hash[n]) {
            hash[n] = true
            permuteUnique(nums.slice(0, i).concat(nums.slice(i + 1))).forEach(function(nn){
                    permutation = [n].concat(nn)
                    ret.push(permutation)
            })
        }
    })

    return ret
};
