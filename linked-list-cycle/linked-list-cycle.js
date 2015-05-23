/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) return false;

    var p = head;
    var pp = head;
    while(p.next && pp.next && pp.next.next) {
        p = p.next;
        pp = pp.next.next;
        if (p === pp) return true;
    }
    return false;
};
