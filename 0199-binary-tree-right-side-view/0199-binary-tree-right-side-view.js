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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root){
        return [];
    }
    
    const ans = [];
    let nextLevel = [root];
    let currLevel = [];
    
    while(nextLevel.length){
        currLevel = nextLevel;
        nextLevel = [];
        
        while(currLevel.length){
            const node = currLevel.shift();
            
            if(node.left){
                nextLevel.push(node.left);
            }
            
            if(node.right){
                nextLevel.push(node.right);
            }
            
             if(!currLevel.length){
                ans.push(node.val);
            }
        }
    }
    
    return ans;    
};