
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (!l1 || !l2) { return l1 || l2 || null; }

    var overflow = 0,
        s,
        p1 = l1,
        p2 = l2,
        o1,
        o2,
        head,
        prev;

    while (p1 || p2 || overflow > 0) {
        o1 = p1 ? p1.val : 0;
        o2 = p2 ? p2.val : 0;

        s = o1 + o2 + overflow;

        if (prev) {
            prev.next = new ListNode(s % 10);
            prev = prev.next;
        } else {
            head = new ListNode(s % 10);
            prev = head;
        }

        overflow = Math.floor(s / 10);

        p1 = p1 && p1.next;
        p2 = p2 && p2.next;
    }

    return head;
};
