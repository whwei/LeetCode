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
var insertionSortList = function(head) {
    if (!head) return null

    var h = head,
        pv = head,
        p = head.next,
        result

    while (p) {
        result = insert(h, pv, p)
        pv = result.pv
        h = result.head
        p = result.next
    }

    return h
};
function insert(h, pv, p) {
    var pp = h;

    if (h.val > p.val) {
        pv.next = p.next
        p.next = h
        h = p
    } else {
        while (pp.next) {
            if (pp.next.val > p.val) {
                pv.next = p.next
                p.next = pp.next
                pp.next= p
                break
            } else if (pp.next === p) {
                pv = p
                break
            }
            pp = pp.next
        }
    }
    return {
        head: h,
        pv: pv,
        next: pv.next
    }
}
