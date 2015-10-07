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



var firstMissingPositive = function(nums) {
    var i = 0,
        n
    for (; i < nums.length;) {
        n = nums[i]
        if (n <= 0 || n > nums.length || n === i + 1) {
            i++
        } else if (nums[n - 1] !== n) {
            swap(nums, i, n - 1)
        } else {
            i++
        }
    }

    var j = 0
    while (j < nums.length && j + 1 === nums[j]) j++

    return j + 1
};

function swap(arr, a, b) {
    var tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
}
