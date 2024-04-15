/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const col = grid.length;
    const row = grid[0].length;
    
    for(let i=1;i<col;i++){
        grid[i][0] += grid[i-1][0];
    }
    
    for(let j=1;j<row;j++){
        grid[0][j] += grid[0][j-1];
    }
    
    for(let i=1;i<col;i++){
        for(let j=1;j<row;j++){
            grid[i][j] += Math.min(grid[i][j-1], grid[i-1][j]);
        }
    }
    
   return grid[col-1][row-1];
};