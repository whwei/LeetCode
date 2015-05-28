/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k, left, right) {
    left = left || 0;
    right = right || nums.length - 1;

    if (left === right) return nums[left];

    k = k - 1;

    var p;
    while (true) {
        p = left;

        p = partition(nums, left, right, p);
        if (p === k) {
            return nums[p];
        } else if (p > k) {
            right = p - 1;
        } else {
            left = p + 1;
        }
    }
};

function partition(list, left, right, pIndex) {
    var pv = list[pIndex];
    swap(list, pIndex, right)

    var q = left;
    for (var i = left; i < right; i++) {
        if (list[i] > pv) {
            swap(list, i, q);
            q++;
        }
    }

    swap(list, q, right);

    return q;
}

function swap(list, i, j) {
    var temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}



/**
 * use partition to determine pth element.
 * if p is greater than k, search in range `left` to `p-1`,
 * if p is less than k, search in range `p+1` to `right`
 * if p equals k, then we get the final result.
 *
 */
