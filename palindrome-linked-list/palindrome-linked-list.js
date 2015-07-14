/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) return true;

    var p = head,
        len = 0;
    while (p) {
        len++;
        p = p.next;
    }

    var count = 0,
        even = len % 2 === 0,
        half = Math.floor(len / 2);

    head = reverseBetween(head, even ? half + 1 : half + 2, len);

    // find mid
    half = half + (even ? 0 : 1);
    var mid = head;
    while (half-- > 0) {
        mid = mid.next;
    }

    var p1 = head;
    while (mid) {
        if (p1.val !== mid.val) return false;

        p1 = p1.next;
        mid = mid.next;
    }

    return true;
};

var reverseBetween = function(head, m, n) {
    if (!head) return null;
    if (n <= m) return head;

    var nn, nnext,
        mm, mprev,
        count = 0,
        p = head;

    while (p && count++ <= n + 1) {
        if (count === m - 1) mprev = p;
        if (count === n + 1) nnext = p;
        if (count === m) mm = p;
        if (count === n) nn = p;
        p = p.next;
    }

    reverseList(mm, n - m + 1);
    mprev && (mprev.next = nn);
    mm.next = nnext;

    return m === 1 ? nn : head;
};

// iteratively
var reverseList = function(head, count) {
    if (!head) return null;
    if (!head.next) return head;

    var prev = null,
        p = head,
        p2 = head.next,
        temp;

    while (p && count-- > 0) {
        temp = p.next;
        p.next = prev;
        prev = p;
        p = temp;
    }

    return prev;
};
