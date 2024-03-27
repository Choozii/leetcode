/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const matrix = Array.from(Array(mat.length), ()=>Array(mat[0].length));
    const seen = Array.from(Array(mat.length), ()=>Array(mat[0].length));
    
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const queue = [];
    
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            matrix[i][j] = mat[i][j];
            if(mat[i][j] === 0){
                queue.push([i, j, 0]);
                seen[i][j] = true;
            }
        }
    }
    
    while(queue.length > 0){
        const [r, c, steps] = queue.shift();
        
        directions.forEach(direction => {
            const nr = r + direction[0];
            const nc = c + direction[1];
            
            if(nr >= 0 && nc >= 0 && nr < mat.length && nc < mat[0].length){
                if(!seen[nr][nc]){
                    seen[nr][nc] = true;
                    queue.push([nr, nc, steps+1]);
                    matrix[nr][nc] = steps+1;
                }
            }
        })
    }
    
    return matrix;
};