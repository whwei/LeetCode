/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    var ret = [];

    travel(root, ret, 0);

    return ret;
};


function travel(root, arr, level) {
    if (!root) return null;

    arr = arr || [];

    arr[level] = arr[level] || [];
    arr[level].push(root.val);

    if (root.left) travel(root.left, arr, level + 1);
    if (root.right) travel(root.right, arr, level + 1);

}
