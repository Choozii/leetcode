/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const map = Array.from(Array(m), ()=>Array(n));

    map[0][0] = 0;
    
    for(let col=0;col<m;col++){
        map[col][0] = 1;
    }
    
    for(let row=0;row<n;row++){
        map[0][row] = 1;
    }
    
    for(let col=1;col<m;col++){
        for(let row=1;row<n;row++){
            map[col][row] = map[col-1][row]+map[col][row-1];
        }
    }
    
    return map[m-1][n-1];
};