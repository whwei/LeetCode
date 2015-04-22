/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {boolean}
 */
var isSameTree = function(p, q) {
    if (p === q) return true;

    if ((p && p.val) !== (q && q.val)) return false;

    if (!isSameTree(p.left, q.left)) return false;
    if (!isSameTree(p.right, q.right)) return false;

    return true;
};
