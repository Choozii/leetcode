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


    const treeHeight = (node) => {
        if(!node) {
            return 0;
        }
                        
        const leftHeight = treeHeight(node.left) + 1;
        const rightHeight = treeHeight(node.right) + 1;
    
        return Math.abs(leftHeight - rightHeight) <=1 ? Math.max(leftHeight, rightHeight):Infinity;
    }
    
    
var isBalanced = function(root) {  
  
    if(!root){
        return true;
    }
    
    return treeHeight(root) !== Infinity;
};