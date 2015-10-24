
/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumGap = function(nums) {
    if (!nums || nums.length < 2) return 0

    radixSort(nums)

    var i , max = 0

    for (i = 1; i < nums.length; i++) {
        max = Math.max(nums[i] - nums[i-1], max)
    }

    return max
};

function radixSort(arr) {
    var i, j, count, aux

    for (i = 0; i < 32; i++) {

        count = [0,0,0]
        aux = []

        for (j = 0; j < arr.length; j++) count[valueAtPosition(arr[j], i) + 1]++

        for (j = 1; j < count.length; j++) count[j] += count[j - 1]

        for (j = 0; j < arr.length; j++) aux[count[valueAtPosition(arr[j], i)]++] = arr[j]

        for (j = 0; j < arr.length; j++) arr[j] = aux[j]
    }
}

function valueAtPosition(v, i) {
    return v >>> i & 1
}
