/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next) return;

    var p1 = head;
    var p2 = head;
    while (p2.next && p2.next.next){
        p1 = p1.next;
        p2 = p2.next.next;
    }

    var pm = p1;
    var pc = p1.next;
    var c;
    while (pc.next) {
        c = pc.next;
        pc.next = c.next;
        c.next = pm.next;
        pm.next = c;
    }

    p1 = head;
    p2 = pm.next;
    while (p1 !== pm){
        pm.next = p2.next;
        p2.next = p1.next;
        p1.next = p2;
        p1 = p2.next;
        p2 = pm.next;
    }
};
