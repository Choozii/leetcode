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
    

var isValidBST = function(root) {    
   let pre = null;
    
    const inorder = (node) => {
        if(!node) return true;
        if(!inorder(node.left)) return false;
        
        if(pre!== null && node.val <= pre) return false;
        
        pre = node.val;
        return inorder(node.right);
    }
    
   return inorder(root);
};