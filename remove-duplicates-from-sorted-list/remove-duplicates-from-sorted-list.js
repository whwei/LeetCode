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
    var hash = {};

    var prev,
        newHead = head || null,
        p = head;

    while (p) {
        if (hash[p.val]) {
            if (prev) {
                prev.next = p.next;
            }
        } else {
            prev = p;
        }

        hash[p.val] = true;

        p = p.next;
    }

    return newHead;
};
