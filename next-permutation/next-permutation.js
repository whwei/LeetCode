/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (!nums || nums.length === 0) return
    if (nums.length === 1) return

    var end = nums.length - 1,
        hasNext = checkNext(nums, 0, end)

    // next permutation not exist
    if (!hasNext) return sortPartial(nums, 0, end)

    var i = nums.length - 2,
        j

    for (; i >= 0; i--) {
        if (checkNext(nums, i, end)) {
            j = end
            while (nums[j] <= nums[i]) {
                j--
            }
            swap(nums, i, j)
            sortPartial(nums, i + 1)
            return
        }
    }
};
function compare(a, b) { return a - b < 0 ? -1 : 1 }

function sortPartial(nums, start) {
    var slice = nums.splice(start)

    var args = [start, 0]

    args = args.concat(slice.sort(compare))

    Array.prototype.splice.apply(nums, args)
}

function checkNext(nums, start, end) {
    var i = end
    for (; i > start; i--) {
        if (nums[i] > nums[i - 1]) {
            return true
        }
    }

    return false
}

function swap(nums, a, b) {
    var temp = nums[b]

    nums[b] = nums[a]
    nums[a] = temp
}
