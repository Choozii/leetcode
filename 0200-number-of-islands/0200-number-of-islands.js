/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0;
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    const bfs = (i, j) => {
        const q = [[i,j]];
        
        while(q.length){
            const [ci, cj] = q.pop();

             for(let k=0;k<4;k++){
                const ni = ci + dx[k];
                const nj = cj + dy[k];

                if(ni >= grid.length || nj >= grid[0].length || ni < 0 || nj < 0){
                   continue;
                }
                 
                if(grid[ni][nj] === '1'){
                   q.push([ni, nj]);
                }
            }
            
          grid[ci][cj] = -1;  // 방문한 섬 표시

        }
    }
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === "1"){
                 res++;
                 bfs(i, j);
            }
        }
    }
    
    return res;
};