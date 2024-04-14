/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const output = [];
    
    const helper = (level, permutation) => {
        if(level === nums.length){
            output.push(permutation);
            return;
        }    
        
        for(let i=0;i<nums.length;i++){
            const num = nums[i];
            if(!permutation.includes(num)){
                helper(level+1, [...permutation, num]);
            }
        }
    }
    
    helper(0, []);
    
    return output;
};