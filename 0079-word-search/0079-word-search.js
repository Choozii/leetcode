/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // 배열 생성
    const visited = Array.from(Array(board.length), ()=>Array(board[0].length).fill(0));
    let answer = false;
    const d = [[-1, 0], [1,0], [0, -1], [0, 1]]; //아래, 위, 왼쪽, 오룬쪽
    
    const helper = (i, j, str) => {        
        if(str === word){
            answer = true;
            return;
        }else if(str.length >= word.length){
            return;
        }
        
        visited[i][j] = 1;
        
        for(let idx=0;idx<4;idx++){
            const [di, dj] = d[idx];
            const ni = i + di;
            const nj = j + dj;
            
            if(ni < 0 || nj < 0 || ni >= board.length || nj >= board[0].length){
                continue;
            }
            
            if(visited[ni][nj] === 0 && board[ni][nj] === word[str.length]){
             helper(ni, nj, str+board[ni][nj]);                
            }
        }
        visited[i][j] = 0;
    }
    
        for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j] === word[0]){
                helper(i,j,word[0]);
            }
        }
    }
    
    return answer;    
};