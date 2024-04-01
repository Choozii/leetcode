/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const visited = new Map();
    
    const helper = (node) => {
        if(!node){
            return node;
        }
        
        if(visited.get(node)){
            // 이미 방문한 경우
            return visited.get(node);
        }
        
        // 아직 방문하지 않은 경우
        // hashmap에 복제해서 넣기
        const cloneNode = new Node(node.val, []);
        visited.set(node, cloneNode);
        
        // 이웃 노드 방문
        node.neighbors.forEach(neighbor => {
            cloneNode.neighbors.push(helper(neighbor));
        })
        
        return cloneNode;
    }
    
    return helper(node);
};