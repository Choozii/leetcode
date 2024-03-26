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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
    function isIdentical(node, subRoot){
        if(!node && !subRoot){
            return true;
        }
        
        if(!node || !subRoot){
            return false;
        }
        
         return node.val === subRoot.val && isIdentical(node.left, subRoot.left) && isIdentical(node.right, subRoot.right);
    }

var isSubtree = function(root, subRoot) {
    if(!root){
        return false;
    }
    
    if(isIdentical(root, subRoot)){
        return true;
    }
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot); 
};