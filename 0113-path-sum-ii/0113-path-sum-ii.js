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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    
    if(!root){
        return [];
    }
    
    const ans = [];
    
    const helper = (node, values, sum) => {
        if(!node){
            return ;
        }
        
        if(sum === targetSum && !node.left && !node.right){
            ans.push(values);
            return;
        }
        
        if(node.left){
            helper(node.left, [...values, node.left.val], sum+node.left.val);       
        }
        
        if(node.right){
            helper(node.right, [...values, node.right.val], sum+node.right.val);    
        }
    }
    
    helper(root, [root.val], root.val);
    
    return ans;
};