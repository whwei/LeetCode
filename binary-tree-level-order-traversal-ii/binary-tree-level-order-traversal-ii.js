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
var levelOrderBottom = function(root) {
    if (!root) return [];

    var result = [],
        queue = [],
        node,
        level;

    queue.push([root, 0]);

    while (queue.length) {
        node = queue.shift();

        if (node[0].left) queue.push([node[0].left, node[1] + 1]);
        if (node[0].right) queue.push([node[0].right, node[1] + 1]);

        if (!result[node[1]]) result[node[1]] = [];

        result[node[1]].push(node[0].val);
    }

    return result.reverse();
};
