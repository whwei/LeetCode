/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return null;
    if (!head.next || k === 0) return head;

    var counter = 0,
        len = 1,
        prev,
        end,
        p = head,
        pp = head;

    while (p.next) {
        p = p.next;
        len++;
    }

    if (k % len === 0) return head;

    while (counter < len - (k % len)) {
        if (!pp) pp = head;
        pp = pp.next;
        counter++;
    }

    end = head;
    while (end.next) {
        if (end.next === pp) prev = end;
        end = end.next;
    }

    prev && (prev.next = null);
    end.next = head;

    return pp;
};
