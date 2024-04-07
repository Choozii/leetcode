/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let prev = 1;
    const output = new Array(nums.length).fill(1);
    
    for(let i=1;i<nums.length;i++){
        output[i] = output[i-1] * nums[i-1];
    }

    for(let i=nums.length-2;i>=0;i--){
        prev *= nums[i+1];
        output[i] *= prev; 
    }

    return output;
};