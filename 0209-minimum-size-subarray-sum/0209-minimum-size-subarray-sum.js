/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = nums[0];
    let left = 0, right = 0;
    let minRes = Infinity;
    
    if(sum === target){
      return 1;
    }
    
   while(left <= right && right < nums.length){
       if(sum < target){
            right++;
            sum += nums[right];
       }else{
           minRes = Math.min(minRes, right-left+1);
           sum -= nums[left];
           left++;
       }
   }
    
    return minRes === Infinity?0:minRes;
};