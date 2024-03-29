/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    
    for(let i=1;i<nums.length;i++){
        dp[i] = Math.max(nums[i], nums[i]+dp[i-1])
    }
    
    return Math.max(...dp);
};