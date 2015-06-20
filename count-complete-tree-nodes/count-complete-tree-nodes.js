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
var countNodes = function(root) {
    if (!root) return 0;

    var l = leftDepth(root),
        r = rightDepth(root);

    if (l === r) {
        var d = 0,
            result = 0;
        while (d < r) {
          result += Math.pow(2, d);
          d++;
        }
        return result;
    } else {
        return countNodes(root.left) + countNodes(root.right) + 1;
    }
};

function leftDepth(root) {
  var d = 0,
      p = root;

  while(p) {
    d++;
    p = p.left;
  }

  return d;
}

function rightDepth(root) {
  var d = 0,
      p = root;

  while(p) {
    d++;
    p = p.right;
  }

  return d;
}
