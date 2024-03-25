/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
다른 non-zero 요소들의 순서는 유지하면서 0은 끝으로 순서 바꾸기
in-place로 진행해야 함
*/
var moveZeroes = function(nums) {
    let zeroCnt = 0;
    
    for(let i=nums.length-1;i>=0;i--){
        if(nums[i] === 0){
            zeroCnt++;
            nums.splice(i, 1);
        }
    }
    
    while(zeroCnt--){
        nums.push(0);
    }
    
    return nums;
};