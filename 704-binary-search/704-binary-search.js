/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx+rightIdx)/2);
        
        if(nums[middleIdx] === target){
            return middleIdx;
        }
        
        if(nums[middleIdx] < target){
            leftIdx = middleIdx + 1;
            continue;
        }else{
            rightIdx = middleIdx - 1;
            continue;
        }
    }
    
    return -1;
};