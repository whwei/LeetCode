/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if (!nums || nums.length === 0) return []

    var ret = [],
        c1, c2, count1 = 0, count2 = 0

    nums.forEach(function(n) {
        if (c1 === n) {
            count1++
        } else if (c2 === n) {
            count2++
        } else if (count1 === 0) {
            c1 = n
            count1 = 1
        } else if (count2 === 0) {
            c2 = n
            count2 = 1
        } else {
            count1--
            count2--
        }

    })

    var n1 = nums.filter(function(n) { return n === c1 }).length
    var n2 = nums.filter(function(n) { return n === c2 }).length

    if (n1 > Math.floor(nums.length / 3)) ret.push(c1)
    if (n2 > Math.floor(nums.length / 3)) ret.push(c2)

    return ret
};

/**
 * Boyer-Moore Majority Vote algorithm
 * ------------------------------------------------------------------
 * Given an array A[N] of integers, find the major element in the array
 *or return -1 if no major element exists in the array. An element 'e'
 * of an array is called major if it exists more than N/2 times in the array.
 *
 * maintain a `candidiat` to record a item, `c` to count 'exceed' number
 * if a item is equal to `candiddate`, `c++`, else `c--`
 * when `c === 0`, it means that `candidate` occurs the same number of time with other value
 *
 */
