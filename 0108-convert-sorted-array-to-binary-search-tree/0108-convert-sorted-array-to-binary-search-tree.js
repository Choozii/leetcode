/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
/*
input : sorted array
output : "height-balanced" binary search tree
*/
var sortedArrayToBST = function(nums) {
        
    const helper = (left, right) => {
        if(left > right){
            return null;
        }
        
        const midIdx = Math.floor((left+right)/2);
        return new TreeNode(nums[midIdx], helper(left, midIdx-1), helper(midIdx+1, right));
    }
    
    return helper(0, nums.length-1);
};