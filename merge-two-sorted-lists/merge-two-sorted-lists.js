
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
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) return null

    var p1 = l1,
        p2 = l2,
        prev,
        p,
        h;

    while (p1 || p2) {
        if (p1 && p2) {
            if (!h) {
                if (p1.val < p2.val) {
                    h = new ListNode(p1.val);
                    p1 = p1.next;
                } else {
                    h = new ListNode(p2.val);
                    p2 = p2.next;
                }

                prev = h;
            } else {
                if (p1.val < p2.val) {
                    p = new ListNode(p1.val);
                    p1 = p1.next;
                } else {
                    p = new ListNode(p2.val);
                    p2 = p2.next;
                }
                prev.next = p;
                prev = p;
            }
        } else if (p1) {
            if (!h) {
                h = new ListNode(p1.val);
                prev = h;
                p1 = p1.next;
            } else {
                p = new ListNode(p1.val);
                prev.next = p;
                prev = p;
                p1 = p1.next;
            }

        } else if (p2) {
            if (!h) {
                h = new ListNode(p2.val);
                prev = h;
                p2 = p2.next;
            } else {
                p = new ListNode(p2.val);
                prev.next = p;
                prev = p;
                p2 = p2.next;
            }
        }
    }

    return h;
};

function cloneSmallerOne(a, b) {
    var va = a.val,
        vb = b.val;

    if (va < vb) {
        a = a.next;
        return new ListNode(va);
    } else {
        return new ListNode(vb);
    }
}


