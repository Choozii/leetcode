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
    
    if(!root){
        return 0;
    }
    
   const stack = [[root, 1]]; 
    
    let maxHeight = 0;
    while(stack.length > 0){
        const [node, height] = stack.pop();
        
        if(node!==null){
            maxHeight = Math.max(maxHeight, height);
            node.children.forEach(child => {
                stack.push([child, height+1]);
            })
        }
    }
   
    return maxHeight;
};