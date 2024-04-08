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

    const validate = (node, low, high) => {
        if(!node){
            return true;
        }
        
        if((low !== null && node.val <= low) ||
           (high !== null && high <= node.val)){
            return false;   
        }
        
        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
    }
    
var isValidBST = function(root) {    
   return validate(root, null, null);
};