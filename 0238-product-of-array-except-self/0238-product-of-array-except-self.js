/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prev = [];
    let prev_number = 1;
    for(let i=0;i<=nums.length-1;i++){
        prev.push(prev_number);
        prev_number *= nums[i];
    }
    
    const next = new Array(nums.length);
    let next_number = 1;
    for(let i = nums.length-1; i>=0;i--){
        next[i] = next_number;
        next_number *= nums[i];
    }
    
    const result = [];
    for(let i=0;i<next.length;i++){
        result.push(prev[i]*next[i]);
    }
    
    return result;
};