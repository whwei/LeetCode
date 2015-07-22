/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root) return null;

    var count = countNode(root.left);
    if (k <= count) {
        return kthSmallest(root.left, k);
    } else if (k > count + 1) {
        return kthSmallest(root.right, k-1-count);
    }

    return root.val;
};
function countNode(root) {
    if (root == null) return 0;

    return 1 + countNode(root.left) + countNode(root.right);
}
