/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = {}
    nums.forEach(num => {
        map[num] = map[num] ? map[num]+1 : 1;
    })
    
    const maps = Object.entries(map)
    
    for(let i=0;i<maps.length;i++){
        const [key, value] = maps[i];
        if(value === 1){
            return key;
        }
    }
    
};