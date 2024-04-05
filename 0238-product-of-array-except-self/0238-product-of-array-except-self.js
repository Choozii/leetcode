/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
input: integer array nums
output : answer[i] = nums[i]만 제외한 다른 요소들의 곱으로 이루어진 answer array

*/
var productExceptSelf = function(nums) {
    const product = new Array(nums.length);
    const left = new Array(nums.length).fill(1);
    const right = new Array(nums.length).fill(1);
    
    for(let i=1;i<nums.length;i++){
        left[i] = left[i-1] * nums[i-1];
    }

    for(let i=nums.length-2;i>=0;i--){
        right[i] = right[i+1] * nums[i+1];
    }
    
    for(let i=0;i<nums.length;i++){
        product[i] = left[i] * right[i];
    }
    
    return product;
};