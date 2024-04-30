/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const output = [[]];
    
    nums.forEach(num => {
        const newSubsets = [];
        
        output.forEach(curr => {
            newSubsets.push([...curr, num]);
        });
        
        newSubsets.forEach(subset => {
            output.push(subset);
        })
    });
    
    
    return output;
};