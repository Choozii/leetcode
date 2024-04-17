/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }
    
    let left = 0;
    for(let pivot=0;pivot<nums.length;pivot++){
        const right = sum - nums[pivot] - left;
        
        if(right === left){
            return pivot;
        }
        
        left += nums[pivot];
    }
    
    return -1;
};