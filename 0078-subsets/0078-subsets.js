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
        
        subset.push(nums[level]);
        helper(level+1, [...subset]);
        subset.pop();
        helper(level+1, [...subset]);
    }
    
    helper(0, []);
    
    return result;
};