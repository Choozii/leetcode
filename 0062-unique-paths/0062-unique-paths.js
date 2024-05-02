/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const map = new Array(m).fill(0).map(()=>new Array(n).fill(1));
    
    for(let col=1;col<m;col++){
        for(let row=1;row<n;row++){
            map[col][row] = map[col-1][row]+map[col][row-1];
        }
    }
    
    return map[m-1][n-1];
};