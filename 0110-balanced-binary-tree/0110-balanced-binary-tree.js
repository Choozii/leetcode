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
    /*
    input : binary tree
    output : height-balanced인지 여부 boolean (양쪽 트리의 높이 차이가 1 이하인지)
    constraint : root === [] -> return true
    */
    let flag = true;
    
    const dfs = (node) => {
        if(!node){
            return 0;
        }
        
        const left = dfs(node.left) + 1;
        const right = dfs(node.right) + 1;
       
        if(Math.abs(left - right) > 1){
            flag = false;
        }

        return Math.max(left, right);
    }
    
    dfs(root);
    return flag;
};