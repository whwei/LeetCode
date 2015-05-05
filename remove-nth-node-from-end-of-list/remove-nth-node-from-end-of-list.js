/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (n <= 0) return head;

    var p = head,
        prev = null,
        current = null,
        total = 0;
        count = 1;

    while (p) {

        if (p && count >= n) {
            if (current) {
                prev = current;
                current = current.next
            } else {
                current = head;
            }
        } else {
            count++;
        }

        p = p.next;
        total++;
    }

    if (prev) {
        prev.next = (current != null) ? current.next : null;
    }

    if (!prev && current) {
        return head.next;
    }
    return head;
};
