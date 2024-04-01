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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // input : binary tree, output : level 별 node.val 리스트
    // bfs
    
    if(!root){
        return [];
    }
    
    const ans = [];
    const q = [root];
    
    while(q.length > 0){
        const qLen = q.length;
        const nodeInLevel = [];
        
        for(let i=0;i<qLen;i++){ 
            const curr = q.shift();
            nodeInLevel.push(curr.val);
            
            if(curr.left){
                q.push(curr.left);
            }
            if(curr.right){
                q.push(curr.right);
            }
        }

        ans.push(nodeInLevel);
    
    }
    
    return ans;
};