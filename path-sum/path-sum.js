/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    // be careful when sum === 0
    if (sum === undefined || !root) return false;

    if (!root.left && !root.right && root.val === sum) {
        return true;
    } else {
        return  ((root.left ? true: false) && hasPathSum(root.left, sum - root.val)) ||
                ((root.right ? true: false) && hasPathSum(root.right, sum - root.val));
    }
};
