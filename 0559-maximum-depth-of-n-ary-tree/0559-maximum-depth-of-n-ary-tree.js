/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    const getDepth = (node) => {
        if(!node){
            return 0;
        }
        
        let max = 0;
        node.children.forEach((child) => {
            max = Math.max(getDepth(child), max);
        })
        
        return max+1;
    }
    
    return getDepth(root);
};