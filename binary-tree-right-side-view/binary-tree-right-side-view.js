
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
var rightSideView = function(root, ret, level) {
    if (!root) return [];

    level = level || 0;

    ret = ret || [];

    if (ret[level] === undefined) {
        ret[level] = root.val;
    }
    rightSideView(root.right, ret, level + 1);
    rightSideView(root.left, ret, level + 1);

    return ret;
};
