
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
var reverseKGroup = function(head, k) {
    if (!head) return null
    if (k <= 1) return head

    var counter = 1
    var newHead
    var result
    var start = head
    var end = start

    while (end && counter < k) {
        end = end.next
        counter++
    }

    if (end) {
        result = reverseGroup(head, end)

        if (result) {
            newHead = result[0]

            if (result[1].next) {
                result[1].next = reverseKGroup(result[1].next, k)
            }
        }
    }

    return newHead || head
};

function reverseGroup(start, end) {
    if (!start || !end) return null
    if (start === end) return [start, end]

    var next = end.next
    var result = reverseGroup(start.next, end)

    if (result) {
        result[1].next = start
        start.next = next
    }

    return [result[0], start]
}
