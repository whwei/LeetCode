/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
    var map = {}

    for (var i = 0; i < postorder.length; i++) {
        map[postorder[i]] = inorder.indexOf(postorder[i])
    }

    return build(inorder, postorder, 0, inorder.length - 1, map)
}

function build(inorder, postorder, l, r, map) {
    if (l > r) return null

    var val = postorder.pop()

    var p = map[val]

    var node = new TreeNode(val)

    node.right = build(inorder, postorder, p + 1, r, map)
    node.left = build(inorder, postorder, l, p - 1, map)


    return node
}
