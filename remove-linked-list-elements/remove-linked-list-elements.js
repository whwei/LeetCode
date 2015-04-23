/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    var p = head,
        newHead = null,
        prev;

    while (p) {
        if (p.val === val) {
            if (prev) {
                prev.next = p.next;
            }

        } else if (head.val !== undefined) {
            if (!newHead) { newHead = p; }

            prev = p;
        } else {
            return {};
        }

        p = p.next;
    }

    return newHead;
};


/*
 * return null instead of undefined
 *
 */
