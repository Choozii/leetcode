/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    nums.forEach(num => {res= res^num});
    
    return res;
};