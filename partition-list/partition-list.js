/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) return null

    var pl = head,
        pge = head,
        fh = new ListNode('x'),
        prevl = fh,
        prevge = fh,
        ge = null,
        l = null

    fh.next = head

    while (true) {
        while (pge && pge.val < x) {
            prevge = pge
            pge = pge.next
        }

        if (!pge) break

        pl = pge.next
        prevl = pge
        while (pl && pl.val >= x) {
            prevl = pl
            pl = pl.next
        }

        if (!pl) break

        ge = pge
        l = pl

        prevge.next = pl
        prevl.next = pl.next
        pl.next = pge

        prevl = prevge
        prevge = pl
        pl = prevl.next

    }

    return fh.next

};
