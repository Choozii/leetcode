/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
   const q = [root];
 
    while(q.length > 0){
        const len = q.length;
        const temp=[];
        
        for(let i=0;i<len;i++){
            const curr = q.pop();
            
            temp.push(curr.left || null);
            temp.push(curr.right || null);
        }
        
        for(let i=0;i<temp.length/2;i++){
             if(temp[i]?.val !== temp[temp.length-1-i]?.val){
                return false;
             }
        }
        
        q.push(...temp.filter(node => node));
    }
    
    return true;
    
};