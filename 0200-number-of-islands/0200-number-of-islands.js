/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let count = 0;
    const dir = [[-1,0],[0,1],[1,0],[0,-1]];
    
      const traverse = (i, j) => {        
        grid[i][j] = "0";
        
        for(let d of dir){
            const ny = i + d[0];
            const nx = j + d[1];
            
            if(nx>=0 && ny>=0 && ny < grid.length && nx < grid[0].length && grid[ny][nx] === "1"){
                traverse(ny, nx);
            }
            
        }
    }
      
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === "1"){
                traverse(i, j);
                count++;
            }
        }
    }
    
    return count;
  
};