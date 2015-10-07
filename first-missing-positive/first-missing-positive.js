/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (!nums) return null

    var hash = {}

    nums.forEach(function(n) {
        hash[n] = true
    })

    var counter = 1

    while (hash[counter]) counter++

    return counter
};
