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
var minDepth = function(root) {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    return Math.min(
                root.left ? minDepth(root.left) : Number.MAX_VALUE,
                root.right ? minDepth(root.right) : Number.MAX_VALUE
           ) + 1;
};
