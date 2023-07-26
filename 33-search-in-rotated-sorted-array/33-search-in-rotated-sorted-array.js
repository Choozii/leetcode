/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);

    while(left<=right){
        mid = Math.floor((left + right) / 2);
        
        if(target === nums[mid]){
            return mid;
        }

        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target <= nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(nums[mid] <= target && target <= nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }

    return -1;
};