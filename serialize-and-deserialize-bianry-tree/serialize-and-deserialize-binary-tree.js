/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return ''

    var queue = [],
        ret = [],
        node

    queue.push(root)

    while (queue.length > 0) {
        node = queue.shift()

        if (node === 'null') {
            if (queue.length === 0) continue

            ret.push('null')
            continue
        }

        ret.push(node.val)

//         if (!node.left && !node.right) continue

        if (node.left)  queue.push(node.left)
        else            queue.push('null')

        if (node.right) queue.push(node.right)
        else            queue.push('null')
    }

    return ret.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) return null

    var queue = data.split(','),
        q = [],
        root,
        current,
        node,
        val

    root = new TreeNode(+queue.shift())
    q.unshift({ node: root, next: 0 })

    while (queue.length > 0) {
        val = queue[0]
        current = q[0]

        if (current.next >= 2) q.shift()

        if (current.next === 0) {
            current.next++
            if (val === 'null') {
                queue.shift()
                continue
            }
            node = new TreeNode(+val)
            queue.shift()
            current.node.left = node
            q.push({ node: node, next: 0 })
        } else if (current.next === 1) {
            current.next++
            if (val === 'null') {
                queue.shift()
                continue
            }
            node = new TreeNode(+val)
            queue.shift()
            current.node.right = node
            q.push({ node: node, next: 0 })
        }
    }

    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
