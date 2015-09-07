/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// nk^2
var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null

    var k = lists.length,
        head,
        next,
        pointers = []

    // initialize pointers
    lists.forEach(function(listHead, i) {
        pointers[i] = listHead
    })

    head = findMin(pointers)
    next = head

    if (!head) return null

    do {
        next.next = findMin(pointers)
        next = next.next
    } while(next)

    return head
};

function findMin(lists) {
    if (!lists || lists.length === 0) return null
    if (lists.every(function(node) { return !node })) return null

    var nextIndex,
        ret,
        min = Number.MAX_VALUE

    lists.forEach(function(node, i) {
        if (node && node.val < min) {
            min = node.val
            nextIndex = i
        }
    })

    if (!lists[nextIndex]) return null

    ret = new ListNode(lists[nextIndex].val)
    lists[nextIndex] = lists[nextIndex].next

    return ret
}









// nklogk
var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null

    var ret = mergeFrom(lists, 0, lists.length - 1)

    return ret
}

function mergeFrom(lists, l, r) {
    if (l === r) return lists[l]
    if (l + 1 === r) return merge(lists[l], lists[r])

    var mid = Math.floor((l + r) / 2)
    var left = mergeFrom(lists, l, mid)
    var right = mergeFrom(lists, mid + 1, r)

    return merge(left, right)
}

function merge(l, r) {
    if (!l && !r) return null
    if (!l || !r) return l || r

    var head,
        p,
        node,
        result

    while (l || r) {
        if (!l) {
            result = next(r, false)
        } else if (!r) {
            result = next(l, true)
        } else if (l.val < r.val) {
            result = next(l, true)
        } else {
            result = next(r, false)
        }

        if (p) {
            p.next = result[0]
        }
        p = result[0]
        if (!head) head = result[0]

        if (result[1]) l = l.next
        else           r = r.next
    }

    return head
}

function next(node, isLeft) {
    return [new ListNode(node.val), isLeft]
}
