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
 * @return {number}
 */

var diameterOfBinaryTree = function(root) {
    let maxHeight = 0;
    
    const height = (node) => {
        if(!node) return 0;
        
        const left = height(node.left);
        const right = height(node.right);
        maxHeight = Math.max(maxHeight, left+right);
        
        return Math.max(left, right)+1;
    }
    
    height(root);
    return maxHeight;
};