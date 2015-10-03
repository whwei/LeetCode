
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;

    var findQinP = find(p, q),
        findPinQ = find(q, p);

    if (findQinP) return findNode(root, p);
    if (findPinQ) return findNode(root, q);

    if (root.left) {
        if (find(root.left, p) && find(root.left, q))
            return lowestCommonAncestor(root.left, p, q);
    }
    if (root.right) {
        if (find(root.right, p) && find(root.right, q))
            return lowestCommonAncestor(root.right, p, q);
    }

    return root;
};


function find(a, d) {
    if (!a) return false;
    if (a === d) return true;

    return find(a.left, d) || find(a.right, d);
}

function findNode(root, node) {
    if (!root) return null;

    if (root === node) return root;

    return findNode(root.left, node) || findNode(root.right, node);
}
