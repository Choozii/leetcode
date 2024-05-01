/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
   
    if(!root){
        return root;
    }
    
    const q = [root];
    
    while(q.length > 0){
        
        const len = q.length;
        
        for(i=0;i<len;i++){
            const curr = q.shift();
            
            curr.next = i===len-1?null:q[0];
            
            if(curr.left){
                q.push(curr.left);                
            }
            
            if(curr.right){
                q.push(curr.right);            
            }
        }
    }
    
    return root;
};