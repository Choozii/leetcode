/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let left = 0, right = n, top = 0, bottom = n;
    const map = Array.from(Array(n), ()=>Array(n));
    let number = 1;
    
    while(left < right && top < bottom){
        for(let i=left;i<right;i++){
            map[top][i] = number++;
        }    
        top++;
        
        for(let i=top;i<bottom;i++){
            map[i][right-1] = number++;
        }
        right--;
        
        if(left >= right || top >= bottom){
            break;
        }
        
        for(let i=right-1;i>=left;i--){
            map[bottom-1][i] = number++;
        }
        bottom--;
        
        for(let i=bottom-1;i>=top;i--){
            map[i][left] = number++;
        }
        left++;
    }
    
    return map;
};