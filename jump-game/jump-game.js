
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (!nums) return null
    if (nums.length === 1) return true

    var p = nums.length - 1;
    var i = p - 1;

    for (; i >= 0; i--) {
        if (nums[i] + i >= p)
            p = i;
    }

    return p === 0;
};


/**
 * let `p` be the last position that can reach the end.
 * if from a position `i`, we can reach `p`, then update `p` to `i`.
 *
 */
