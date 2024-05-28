/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    const adjacent = {}
    
    if(n <= 2){
        let ret = []
        while(n-- > 0){
            ret.push(n);
        }
        return ret;
    }
    
    edges.forEach(([s, e]) => {
        adjacent[s]= adjacent[s]?[...adjacent[s], e]:[e];
        adjacent[e]= adjacent[e]?[...adjacent[e], s]:[s];
    });
    
    let leaves = [];
    
    Object.entries(adjacent).forEach(([key, value]) => {
        if(value.length === 1){
            leaves.push(key);
        }
    });
    

    while(n > 2){
        n -= leaves.length;
        const newLeaves = [];
        
        leaves.forEach((leaf) => {
            const neighbor = adjacent[leaf].pop();
            // console.log('neighbor', neighbor);
            adjacent[neighbor].splice(adjacent[neighbor].indexOf(leaf*1), 1);
            
            if(adjacent[neighbor].length === 1){
                newLeaves.push(neighbor);
            }      
        });
             
        leaves = newLeaves;
    }
    
    return leaves;
    
};