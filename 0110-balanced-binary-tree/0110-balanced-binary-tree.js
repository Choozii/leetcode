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
var isBalanced = function(root) {
    let flag = true;
    const height = (node) => {
        if(node === null){
            return 0;
        }
        
        const left = height(node.left) + 1;
        const right = height(node.right) + 1;
        
        if(Math.abs(left-right) > 1){
            flag = false; 
        }
        
        return Math.max(left, right);
    }
    
    height(root);
    return flag;
};