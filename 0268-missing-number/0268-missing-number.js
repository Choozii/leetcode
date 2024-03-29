/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let XORNum = 0;
    for(let i=0;i<nums.length+1;i++){
        XORNum ^= i;
    }
    
   nums.forEach(num => {
       XORNum ^= num;
   })
    
    return XORNum;
};