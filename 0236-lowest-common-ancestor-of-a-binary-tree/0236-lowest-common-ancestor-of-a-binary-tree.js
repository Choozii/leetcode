/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let lca;
    
    const helper = (node) => {
        if(!node){
            return false;
        }
        
        const left = helper(node.left)?1:0;
        const right = helper(node.right)?1:0;
        const mid = node.val === p.val || node.val === q.val?1:0;
        
        const res = left+right+mid;
        
        if(res >= 2){
            lca = node;
        }
        
        return res;
    }
    
    helper(root);
    return lca;
};