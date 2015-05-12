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
var isSymmetric = function(root) {
    return dfs(root) === dfs(root, true);
};

function dfs(root, reverse) {
    var p  = '';

    if (root) {

        if (!reverse) {
            if (root.left) p += 'l' + dfs(root.left, reverse);
            if (root.right) p += 'r' + dfs(root.right, reverse);
        } else {
            if (root.right) p += 'l' + dfs(root.right, reverse);
            if (root.left) p += 'r' + dfs(root.left, reverse);
        }
        p += root.val;

    }

    return p;
}
