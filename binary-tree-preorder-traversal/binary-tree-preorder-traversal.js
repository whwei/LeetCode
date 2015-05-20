/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) return [];

    var arr = [root.val];

    if (root.left)  arr = arr.concat(preorderTraversal(root.left));
    if (root.right) arr = arr.concat(preorderTraversal(root.right));

    return arr;
};
