/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return [];

    var ret = [];

    search(root, [], ret);

    return ret;
};

function search(root, path, ret) {
    if (!root) return;

    if (!root.left && !root.right) {
        ret.push(path.concat(root.val).join('->'));
    }

    if (root.left) {
        search(root.left, path.concat(root.val), ret);
    }

    if (root.right) {
        search(root.right, path.concat(root.val), ret);
    }
}
