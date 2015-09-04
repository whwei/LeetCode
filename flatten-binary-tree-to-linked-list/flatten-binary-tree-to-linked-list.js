var flatten = function(root) {
    if (!root) return

    travel(root)
};

function travel(root) {
    if (!root) return null

    var start = root,
        end = root,
        temp = root.right,
        flattenLeft,
        flattenRight

    if (!start.left) {
        if (start.right) {
            end = travel(start.right)[1]
            if (end) end.left = null
        }
    } else {
        var flattenLeft = travel(start.left)

        if (flattenLeft) {
            start.right = flattenLeft[0]
            end = flattenLeft[1]

            if (temp) {
                flattenRight = travel(temp)
                flattenLeft[1].right = flattenRight[0]
                end = flattenRight[1]
            }
        }
    }

    start.left = null

    return [start, end]
}
