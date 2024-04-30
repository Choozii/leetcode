/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const output = [];
    const n = nums.length;
    
    const backtrack = (first = 0, curr = [], limit) => {
        if(curr.length === limit){
            output.push([...curr]);
            return;
        }
        
        for(let i=first;i<n;i++){
            curr.push(nums[i]);
            backtrack(i+1, curr, limit);
            curr.pop();
        }
    }
    
    for(let i=0;i<n+1;i++){
        backtrack(0,[],i);
    }
    
    return output;
};