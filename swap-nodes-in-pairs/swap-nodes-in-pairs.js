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
var swapPairs = function(head) {
    if (!head) return null

    var count = 0,
        prev,
        former,
        temp,
        p = head,
        newHead

    while (p) {
        if (count % 2 === 0) {
            if (count === 0 && !p.next) newHead = p
            former = p
        } else {
            // first pair
            if (count === 1) {
                newHead = p
            }

            if (prev) prev.next = p
            former.next = p.next
            p.next = former
            p = former
            prev = p
        }
        count++
        p = p.next
    }

    return newHead
};
