/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total = 0;
    let start = 0;
    let curr = 0;
    
    for(let i=0;i<gas.length;i++){
        const diff = gas[i] - cost[i];
 
        total += diff;
        curr += diff;
        
        if(curr < 0){
            start = i+1;
            curr = 0;
        }
    }
    
    return total < 0? -1 : start;
};