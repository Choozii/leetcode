/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prevMin = nums[0], prevMax = nums[0];
    let result = nums[0];
    
    for(let i=1;i<nums.length;i++){
        const temp = Math.min(prevMin*nums[i], prevMax*nums[i], nums[i]);
        prevMax = Math.max(prevMin*nums[i], prevMax*nums[i], nums[i]);
        prevMin = temp;
        result = Math.max(prevMax, result);
    }
    
    return result;
};