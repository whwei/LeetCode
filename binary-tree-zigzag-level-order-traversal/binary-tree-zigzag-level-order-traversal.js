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

var zigzagLevelOrder = function(root) {
    if (!root) return []

    var ret = []

    travel(root, ret, 0)

    return ret.map(function(level, i) {
        if (i % 2 === 1) {
            return level.reverse()
        }
        return level
    })
};

function travel(root, ret, level) {
    if (!root) return

    if (!ret[level]) ret[level] = []

    ret[level].push(root.val)

    if (root.left) travel(root.left, ret, level + 1)
    if (root.right) travel(root.right, ret, level + 1)

}
