
/**
 * @param {number[]} nums
 * @return {number}
 */

// var rob = function(nums) {
//     return robIter(nums, 0, nums.length - 1, {});
// };

// function robIter(nums, start, end, store) {
//     if (start === end) return 0;
//     if (end - start === 1) return nums[start];

//     var key = start + '-' + end;

//     if (store && store[key] !== undefined) return store[key];

//     var sum = Math.max( nums[start] + robIter(nums, start + 2, end, store),
//                         robIter(nums, start + 1, end, store),
//                         0);

//     if (store) store[key] = sum;

//     return sum;
// }

var rob = function(nums) {
    return nums.reduce(function(prev, n) {
        return [prev[1], Math.max(prev[1], prev[0] + n)];
    }, [0, 0])[1];
};

/*
 * DYNAMIC PROGRAMMING
 * ------------------------------------------
 * subproblem: Let D(n) be the maximum amount of money you can rob alone a street of n houses without alerting police
 * recurrence: possible solution: (1) D(n) = nums[n] + D(n - 2).  (2) D(n) = D(n - 1).
 *             Thus, D(n) = max( (1), (2) )
 * base cases: D(0) = 0
 *
 */
