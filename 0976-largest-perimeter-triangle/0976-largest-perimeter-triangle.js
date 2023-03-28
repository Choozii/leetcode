/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    
    
    const sorted = nums.sort((a,b) => b-a);
    console.log(sorted)
    
    for(let i=0;i<=nums.length-3;i++){
        if(sorted[i] < sorted[i+1] + sorted[i+2]){
            return sorted[i]+sorted[i+1]+sorted[i+2];
        }
    }
    
    return 0;
};