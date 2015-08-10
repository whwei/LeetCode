/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, max, min) {
    if (!root) return true

    max = max !== undefined ? max : Number.MAX_VALUE
    min = min !== undefined ? min : -Number.MAX_VALUE

    if (root.val >= max || root.val <= min) return false

    if ((root.left && root.left.val > root.val) ||
        (root.right && root.right.val < root.val)) {
        return false
    }

    return isValidBST(root.left, root.val, min) && isValidBST(root.right, max, root.val)
};
