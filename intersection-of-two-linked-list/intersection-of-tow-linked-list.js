/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    var pa = headA,
        pb = headB,
        flag = false;

    while(true) {
        if (pa === pb)
            return pa;

        pa = pa.next;
        pb = pb.next;

        if (!pa) {
            if (flag === false) {
                pa = headB;
                flag = true;
            } else {
                return null;
            }
        }
        if (!pb) {
            pb = headA;
        }

    }
};
