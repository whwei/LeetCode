/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number}
 */
var maxDepth = function(root, depth) {
    if (!root) return 0;

    var leftDepth = 0,
        rightDepth = 0;

    depth = depth || 1;

    if (root.left) { leftDepth = maxDepth(root.left, depth); }
    if (root.right) { rightDepth = maxDepth(root.right, depth); }

    return Math.max(depth + leftDepth, depth + rightDepth);
};
