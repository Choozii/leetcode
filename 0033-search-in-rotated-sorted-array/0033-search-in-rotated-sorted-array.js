/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const binarySearch = (nums, start, end, target) => {
    
    while(start <= end){
        const mid = Math.floor(end + (start - end) /2);
        if(nums[mid] === target){
            return mid;
        }
        
        if(nums[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
}


var search = function(nums, target) {
    const len = nums.length;
    let left = 0, right = nums.length - 1;
    
    while(left <= right){
        const mid = Math.floor(left + (right - left) / 2);     
       
        if(nums[mid] > nums[len - 1]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    
    const res1 = binarySearch(nums, 0, left -1, target);
    
    if(res1 !== -1){
        return res1;
    }
    
    const res2 = binarySearch(nums, left, len-1, target);

   
    return res2;
};