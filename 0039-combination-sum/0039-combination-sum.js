/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const output = [];
    
    const helper = (combinations, sum) => {
        if(sum < 0){
            return;
        }else if(sum === 0){
            // 겹치는 값이 있는지 확인
            const isUnique = output.every(value => value.sort((a,b)=>a-b).join("") !== combinations.sort((a,b) => a-b).join(""));
            if(isUnique){
                output.push(combinations);
            }
            return;
        }
        
        for(let i=0;i<candidates.length;i++){
            helper([...combinations, candidates[i]], sum-candidates[i]);            
        }
    }
    
    helper([], target);
    
    return output;
};