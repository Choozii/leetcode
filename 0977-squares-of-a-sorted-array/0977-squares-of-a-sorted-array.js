/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let positiveStartIdx = null;
    
    for(let i=0;i< nums.length;i++){
      if(positiveStartIdx === null && nums[i] >= 0){
          positiveStartIdx = i;
      }
      nums[i] = nums[i]**2;
    }
   
     if(positiveStartIdx === null){
        return nums.reverse();
    }
    
    let ptr1 = positiveStartIdx-1;
    let ptr2 = positiveStartIdx;
    const ret = [];
    
   
    
    while(ptr1 >= 0 && ptr2 < nums.length){
        if(nums[ptr1] <= nums[ptr2]){
            ret.push(nums[ptr1]);
            ptr1--;
        }else{
           ret.push(nums[ptr2]);
           ptr2++; 
        }
    }
    
     while(ptr1 >= 0){
            ret.push(nums[ptr1]);
            ptr1--;
        }
    
    while(ptr2 < nums.length){
        ret.push(nums[ptr2]);
        ptr2++; 
    }
    
    return ret;
};