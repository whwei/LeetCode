/**
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    if (!root) return

    var n1, n2, previous

    var r
    // morris traversal
    while (root) {
        if (root.left) {

            r = root.left
            while (r.right && r.right !== root) r = r.right

            if (r.right) {
                if (previous && previous.val > root.val) {
                    if (!n1) {
                        n1 = previous
                        n2 = root
                    } else {
                        n2 = root
                    }
                }
                previous = root

                r.right = null
                root = root.right
            } else {

                r.right = root
                root = root.left
            }
        } else {
            if(previous && previous.val > root.val) {
                if (!n1) {
                    n1 = previous
                    n2 = root
                } else {
                    n2 = root
                }
            }

            previous = root
            root = root.right
        }
    }

    swap(n1, n2)
};

function swap(n1, n2) {
    var temp = n1.val
    n1.val = n2.val
    n2.val = temp
}

// travel the binary search tree in order, reduce the problem to "two elements in a sorted array
// are swapped by mistack, recover the array"
