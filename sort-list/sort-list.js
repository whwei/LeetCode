/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head) return null
    if (!head.next) return head

    var p = head,
        pp = head.next,
        temp

    while (p && pp && pp.next) {
        p = p.next
        pp = pp.next.next
    }

    temp = p.next
    p.next = null

    var l = sortList(head)
    var r = sortList(temp)

    return merge(l, r)
};

function merge(l, r) {
    if (!r || !l) return l || r

    var h, p

    if (l.val < r.val) {
        h = l
        l = l.next
    } else {
        h = r
        r = r.next
    }

    p = h

    while (l && r) {
        if (l.val < r.val) {
            p.next = l
            p = l
            l = l.next
        } else {
            p.next = r
            p = r
            r = r.next
        }
    }

    if (l) {
        while (l) {
            p.next = l
            p = l
            l = l.next
        }
    } else if (r) {
        while (r) {
            p.next = r
            p = r
            r = r.next
        }
    }

    return h
}
