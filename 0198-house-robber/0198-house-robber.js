/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if(nums.length === 1){
        return nums[0];
    }
    
    let far = nums[0];
    let neighbor = Math.max(nums[0], nums[1]);
    
    
    let currentIdx = 2;
    
    while(currentIdx < nums.length){          
        [neighbor, far] = [Math.max(nums[currentIdx] + far, neighbor), neighbor];
        currentIdx++;
    }
    
    return neighbor;
};