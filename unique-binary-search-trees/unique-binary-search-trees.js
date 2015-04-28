/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;

    if (numTrees[n] !== undefined) return numTrees[n];

    var sum = 0;

    for (var i = 0; i < n; i++) {
        sum += numTrees(i) * numTrees(n - i - 1);
    }

    numTrees[n] = sum;

    return sum
};


/*
 * subproblem: let D(n) be the number of unique BST's that store n sorted values.
 *
 * recurrence:   1                 2            ......        i+1
 *              / \               / \                         / \
 *           D(0)  D(n-1)      D(1) D(n-2)                 D(i) D(n-i-1)
 *
 * base case: D(0) = 1
 *            D(1) = 1
 *
 * /
