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
// iterative version
// var reverseList = function(head) {
//     if (!head) return null;

//     var prev = null,
//         p = head,
//         tempNext,
//         newHead;

//     while (p) {
//         tempNext = p.next;

//         p.next = prev;

//         prev = p;

//         if (tempNext) {
//             p = tempNext;
//         } else {
//             newHead = p;
//             break;
//         }
//     }

//     return newHead;
// };


// recursive version
var reverseList = function(head) {
    if (!head) return null;

    var reversedHead = reverseList(head.next),
        p = reversedHead;

    if (p) {
        while (p.next) {
            p = p.next;
        }

        p.next = head;
    }

    head.next = null;

    return reversedHead ? reversedHead : head;
}
