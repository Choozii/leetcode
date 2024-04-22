/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const map = {}
    
    nums.forEach((num) => {
        map[num]?map[num]++:map[num]=1
    });
    
    Object.entries(map).sort((a,b) => a[0]-b[0]).forEach(([key, val]) => {
        for(let i=0;i<val;i++){
            nums.push(key);
            nums.shift();
        }
    })
    return nums;
};