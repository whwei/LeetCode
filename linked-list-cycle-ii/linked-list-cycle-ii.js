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
var detectCycle = function(head) {
    if (!head) return null;

    var original = head
    var p = head
    var pp = head
    while (pp && pp.next) {
        p = p.next;
        pp = pp.next.next;
        if (p === pp) break;
    }

    if (pp == null || pp.next == null) {
        return null;
    }

    p = head;
    while(p != pp){
        p = p.next;
        pp = pp.next;
    }

    return pp;
};
