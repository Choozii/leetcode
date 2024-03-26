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
        
    const helper = (nums) => {
        if(!nums.length){
            return null;
        }
        const midIdx = Math.floor(nums.length/2);
        const mid = nums[midIdx];
        const left = helper(nums.slice(0, midIdx));
        const right = helper(nums.slice(midIdx+1, nums.length));
        
        return new TreeNode(mid, left, right);
    }
    
    return helper(nums);
};