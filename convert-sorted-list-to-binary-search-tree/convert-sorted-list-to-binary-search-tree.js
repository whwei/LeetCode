

var sortedListToBST = function(head) {
    if (!head) return null
    if (!head.next) return new TreeNode(head.val)

    var p = head, pp = head.next.next

    while(pp && pp.next) {
        p = p.next
        pp = pp.next.next
    }

    var tmp = p.next
    var root = new TreeNode(tmp.val)

    p.next = null

    root.left = sortedListToBST(head)
    root.right = sortedListToBST(tmp.next)

    return root
};
