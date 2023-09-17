/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//     const arr = [];
//     let res = 0;
    
//     for(let num of nums){
//         arr[num] = 1;
//     }
    
//     let count = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === 1){
//             count++;
//             res = Math.max(count, res);
//         }else{
//             count = 0;
//         }
//     }
//     return res;
// };

var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let res = 1;
    const mins = [];
    
    if(!nums.length){
        return 0;
    }
    
    for(let num of nums){
        if(set.has(num-1)){
            continue;
        }else if(set.has(num+1)){
            // 얘가 제일 작은놈인듯
            mins.push(num);
        }
    }
    
    let count = 1;
    for(let min of mins){
        let flag = true;
        let value = min;
        while(flag){
            if(set.has(value+1)){
                count++;
                value++;
                res = Math.max(count, res);
            }else{
                flag = false;
                count = 1;
            }
        }
    }
    
    return res;
};