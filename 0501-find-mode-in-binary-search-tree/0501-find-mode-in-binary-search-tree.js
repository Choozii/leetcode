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
 * @return {number[]}
 */
var findMode = function(root) {
    const map = {}; //key : 숫자, value : 카운트 값
    
    const traverse = (node) => {
        if(!node) return null;
        traverse(node.left);
        map[node.val]? map[node.val] = map[node.val]+1 : map[node.val] = 1;
        traverse(node.right);
    }
    
    traverse(root);
    
    let max = -Infinity;
    let maxNum = [];
    
    Object.entries(map).forEach(([key, val]) => {
        if(val === max){
           maxNum.push(key);
       }else if(val > max){
           max = val;
           maxNum = [key];
       }
    });
    
    return maxNum;
};