/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
    var map = {}

    for (var i = 0; i < preorder.length; i++) {
        map[preorder[i]] = inorder.indexOf(preorder[i])
    }

    return build(preorder, inorder, 0, inorder.length - 1, map)
}

function build(preorder, inorder, l, r, map) {
    if (l > r) return null

    var val = preorder.shift()

    var p = map[val]

    var node = new TreeNode(val)

    node.left = build(preorder, inorder, l, p - 1, map)
    // preorder traversal
    node.right = build(preorder, inorder, p + 1, r, map)

    return node
}

