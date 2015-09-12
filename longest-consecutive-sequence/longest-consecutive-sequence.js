/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums || nums.length === 0) return 0;
    if (nums.length === 1) return 1;

    var hash = {},
        max = 0;

    nums.forEach(function(n) {
        hash[n] = true;
    });

    nums.forEach(function(n) {
       var i = n,
           j = n;
       while (hash[--i]) {
           hash[i] = undefined;
       }

       while (hash[++j]) {
           hash[j] = undefined;
       }
       max = Math.max(max, j - i - 1);


    });

    return max;
};


/**
 * The trick here is to delete the key numbers which have been counted to avoid unnecessary
 * walk of consecutive sequence.
 */
