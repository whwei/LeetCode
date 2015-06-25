/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    var q = root;

    while (q) {
        var level = new TreeLinkNode(0);
        var current = level;
        while (q != null) {
            if (q.left != null) {
                current.next = q.left;
                current = current.next;
            }
            if (q.right != null) {
                current.next = q.right;
                current = current.next;
            }
            q = q.next;
        }
        q = level.next;
    }
};
