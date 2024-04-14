/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const helper = (level, subset) => {
        if(level === nums.length){
            result.push(subset);
            return;
        }
        
        helper(level+1, [...subset, nums[level]]);
        helper(level+1, [...subset]);
    }
    
    helper(0, []);
    
    return result;
};