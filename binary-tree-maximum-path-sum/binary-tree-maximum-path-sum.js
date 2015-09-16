
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    if (!root) return null

    var result = { max: -Number.MAX_VALUE }

    maxPath(root, result)

    return result.max
};

function maxPath(root, result) {
    if (!root) return 0

    var l = maxPath(root.left, result)
    var r = maxPath(root.right, result)

    if (l + r + root.val > result.max) result.max = l + r + root.val

    // the return value here means the max sum this `root` can contribute as a child node
    // the actual max sum of the node is tracked by `result`
    return Math.max(0, Math.max(l, r) + root.val)
}
