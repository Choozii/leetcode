/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  
    const map = Array.from(Array(image.length), () => Array(image[0].length, 0));
    
    for(let i=0;i<image.length;i++){
        for(let j=0;j<image[0].length;j++){
            map[i][j] = image[i][j];        
        }
    }
    
    const q = [[sr,sc]];
    const originalColor = image[sr][sc];
    const d = [[1,0], [-1,0], [0,1], [0,-1]];
    
    while(q.length){
        const [x,y] = q.shift();
        map[x][y] = color;
        
        for(let i=0;i<d.length;i++){
            const [dx,dy] = d[i];
            const nx = x + dx;
            const ny = y + dy;
            
            if(nx < 0 || nx >= map.length) continue;
            if(ny < 0 || ny >= map[0].length) continue;
            
            if(map[nx][ny] === originalColor && map[nx][ny] !== color){
                q.push([nx, ny]);
            }
        }
    }
    
    return map;
};