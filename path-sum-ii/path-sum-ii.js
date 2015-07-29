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
 * @return {number[][]}
 */
var pathSum = function(root, sum, path, arr) {
    if (!root) return [];

    arr = arr || [];
    path = path || [];

    if (!root.left && !root.right) {
        if (path.reduce(function(acc, n) { return n + acc; }, 0) === sum - root.val) {
            path.push(root.val);
            arr.push(path);
        }
    } else {
        path.push(root.val);
        if (root.left) pathSum(root.left, sum, path.slice(0), arr);
        if (root.right) pathSum(root.right, sum, path.slice(0), arr);
    }

    return arr;
};
