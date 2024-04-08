/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  // 0 - 빈 칸, 1 - 신선한 오렌지, 2 - 썩은 오렌지
  // 모든 오렌지가 다 썩는 최소 시간
         
    // bfs로 풀 예정
    // 썩은 오렌지가 여러개라면? => 썩은 오렌지의 위치를 파악 큐에 넣어주기
    // 현재 큐의 길이만큼의 오렌지가 사방으로 다 퍼트릴때가 1초
    // grid 원본 배열을 바꿔주기
    // 큐가 비워졌는데도 1이 남아있다면, -1을 리턴     
    const q = [];
    let sec = 0;
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 2){
                q.push([i,j]);
            }
        }
    }
    
    if(q.length > 0){
        sec = sec - 1; //첫번째 while문은 0초 처리
    }
   
    while(q.length > 0){
        const qLen = q.length;
        
        for(let i=0;i<qLen;i++){
            const rotten = q.shift();
            
            for(let d of dir){
                const ni = rotten[0] + d[0];
                const nj = rotten[1] + d[1];
                
                if(ni >= 0 && nj >= 0 && ni < grid.length && nj < grid[0].length && grid[ni][nj] === 1){
                    grid[ni][nj] = 2;
                    q.push([ni, nj]);
                }
            }
        }
        sec++;
    }
    
     for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 1){
                return -1;
            }
        }
    }
    
    return sec;
};