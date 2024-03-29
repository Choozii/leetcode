/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const arr = new Array(nums.length+1);
    for(let i=0;i<nums.length;i++){
        arr[nums[i]] = true;
    }
            
    for(let i=0;i<arr.length;i++){
        if(!arr[i]){
            return i;
        }
    }
};