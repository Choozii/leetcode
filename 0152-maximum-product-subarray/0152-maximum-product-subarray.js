/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let sub_max = nums[0];
    let sub_min = nums[0];
    let res = sub_max;
    
    for(let i=1;i<nums.length;i++){
        [sub_max, sub_min] = [Math.max(nums[i], nums[i] * sub_max,  nums[i] * sub_min)
                             , Math.min(nums[i], nums[i] * sub_max,  nums[i] * sub_min)];
        res = Math.max(res, sub_max);
    }
    return res;
};