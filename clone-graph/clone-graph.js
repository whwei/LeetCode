/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph, visited) {
    if (!graph) return null;

    visited = visited || {};

    var clone;

    if (visited[graph.label]) {
        return visited[graph.label]
    } else {

        clone = new UndirectedGraphNode(graph.label)

        visited[graph.label] = clone

        graph.neighbors.forEach(function(neighber) {
            if (!visited[neighber.label])
                clone.neighbors.push(cloneGraph(neighber, visited))
            else
                clone.neighbors.push(visited[neighber.label])
        })

    }

    return clone
};
