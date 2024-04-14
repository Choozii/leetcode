/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const output = [];
    
    const helper = (combinations, sum, prev) => {
        if(sum < 0){
            return;
        }else if(sum === 0){
            output.push(combinations);
            return;
        }
        
        for(let i=0;i<candidates.length;i++){
            if(prev <= candidates[i]){
                helper([...combinations, candidates[i]], sum-candidates[i], candidates[i]);           
            }
        }
    }
    
    helper([], target, 0);
    
    return output;
};