/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length-1;
    
    if(nums.length === 1){
        return nums[0];
    }
    
    while(left < right){
        const mid = Math.floor((left + right)/2);
        if(nums[mid] > nums[right]){
            left = mid+1;
        }else{
            right = mid;
        }
    }
        
    return nums[left];
};