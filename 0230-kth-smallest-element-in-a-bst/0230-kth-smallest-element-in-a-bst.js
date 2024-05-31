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
 * @param {number} k
 * @return {number}
 */

const inorder = (node, arr) => {
    if(!node){
        return arr;
    }
    inorder(node.left, arr);
    arr.push(node.val);
    inorder(node.right, arr);
    return arr;
}

var kthSmallest = function(root, k) {
    const nums = inorder(root, []);
    return nums[k-1];
};