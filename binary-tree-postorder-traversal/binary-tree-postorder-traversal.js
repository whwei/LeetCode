/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) return [];

    var stack = [],
        ret = [],
        current;

    stack.push(root);

    while (stack.length > 0) {

        current = stack.pop();

        if (!current) continue;

        ret.unshift(current.val);

        if (current && current.left) {
            stack.push(current.left);
        }

        if (current && current.right) {
            stack.push(current.right);
        }
    }


    return ret;
};


/*
 * Convert Recursive To Iterative
 * maintain a stack by yourself instead of the compiler or interprete.
 * push the params you originally passed into the recursive function into the stack.
 *
 */
