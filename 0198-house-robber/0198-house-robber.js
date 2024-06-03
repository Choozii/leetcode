/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = new Array(nums.length + 1);
    dp[0] = 0;
    dp[1] = nums[0];
    
    for(let i=2;i<dp.length;i++){
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
    }
    
    // console.log(dp);
    return dp[dp.length-1];
};