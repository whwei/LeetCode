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
var deleteDuplicates = function(head) {
    if (!head) return null;

    var p = head,
        newHead = null,
        dup = false,    // is current element duplicate previous one
        prev;           // previous none duplicates linked list

    if (!p.next) return p;

    while (p) {
        // current element duplicate next one
        if (p.next && p.val === p.next.val) {
            if (prev) prev.next = null;
            dup = true;
        } else {
            // if current element has no duplicates
            if (!dup) {
                if (prev) {
                    prev.next = p;
                    prev = p;
                } else {
                    if (!newHead) {
                        newHead = p;
                    }
                    prev = p;
                }
            }
            dup = false;
        }

        p = p.next;
    }

    return newHead;
};
