/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root, path, sum) {
    if (!root) return 0

    path = path || ''
    sum = sum || {result: 0}

    if (!root.left && !root.right)
        sum.result += +(path + root.val)

    if (root.left) {
        sumNumbers(root.left, path + root.val, sum)
    }

    if (root.right) {
        sumNumbers(root.right, path + root.val, sum)
    }

    return sum.result;
};
