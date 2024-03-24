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
 * @return {TreeNode}
 */
/*
input : binary tree
output : 트리의 양쪽을 뒤집어서 root를 리턴
*/
var invertTree = function(root) {
    
    const invert = (node) => {
        if(!node) return null;
        

        let temp = node.right;
        node.right = node.left;
        node.left = temp;
        
        invert(node.right);
        invert(node.left);
        return node;
    }
    
    return invert(root);
};