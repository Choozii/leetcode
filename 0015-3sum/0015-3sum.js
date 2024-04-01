/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    const ans = [];

    const check = (idx) => {
        const number = nums[idx];
        let left = idx+1, right = nums.length-1;
        
        while(left < right){   
            const sum = number+nums[left]+nums[right];
            
            if(sum < 0){
                left++;
            }else if(sum > 0){
                right--;
            }else{
                ans.push([number, nums[left++], nums[right--]]);
                
                while(nums[left] === nums[left-1]){
                    left++;
                }
            }
            
        }
    }
        
        
    
    nums.sort((a,b) => a-b);
    
    nums.forEach((val, idx) => {
        if(idx === 0 || nums[idx-1] !== nums[idx]){ // 중복되는 값은 호출되지 않도록 처리
            if(nums[idx] > 0){
                return;
            }
            check(idx);               
        }
    });
    

    
    return ans;
    
};