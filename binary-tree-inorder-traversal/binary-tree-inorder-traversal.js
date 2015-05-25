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
var inorderTraversal = function(root) {
    if (!root) return [];

    var ret = [],
        stack = [];


    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        ret.push(root.val);
        root = root.right;
    }

    return ret;
};
