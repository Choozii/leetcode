/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currSum = 0;
  let maxSum = -Infinity;
    
  for(let i=0;i<nums.length;i++){
    currSum = Math.max(currSum, 0) + nums[i];
    maxSum = Math.max(maxSum, currSum);
  }
    
   return maxSum;
};