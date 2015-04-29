/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number} n
 * @returns {TreeNode[]}
 */
var generateTrees = function(n) {
    return generateTreesIter(n, 1);
};

function generateTreesIter(n, start) {
    if (n === 0) return [null];
    if (n === 1) return [new TreeNode(start)];

    var key = n + '-' + start;
    if (generateTrees[key] !== undefined) return generateTrees[key];

    var l,
        r,
        index,
        node,
        nodes = [];

    for (var i = 0; i < n; i++) {
        index = start + i;
        l = generateTreesIter(i, start);
        r = generateTreesIter(n - i - 1, index + 1);


        build(index, l, r, nodes);

    }

    generateTrees[key] = nodes;

    return nodes;
}

function build(val, l, r, nodes) {
    var n,
        node = new TreeNode(val);

    if (l && r && l.length > 0 && r.length > 0) {
        l.forEach(function(lf) {
            r.forEach(function(rf) {
                n = new TreeNode(val);
                n.left = lf;
                n.right = rf;
                nodes.push(n);
            });
        });
    } else if (l && l.length > 0) {
        l.forEach(function(lf) {
            n = new TreeNode(val);
            n.left = lf;
            nodes.push(n);
        });
    } else if (r && r.length > 0) {
        r.forEach(function(rf) {
            n = new TreeNode(val);
            n.right = rf;
            nodes.push(n);
        });
    }
}
