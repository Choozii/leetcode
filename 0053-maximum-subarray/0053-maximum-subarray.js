/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const optimal = [nums[0]];
    
    for(let i=1;i<nums.length;i++){
        optimal[i] = Math.max(optimal[i-1]+nums[i], nums[i]);
    }
    
    return Math.max(...optimal);
};