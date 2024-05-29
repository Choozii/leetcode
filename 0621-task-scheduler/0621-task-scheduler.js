/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const count = {}
    
    tasks.forEach(task => {
        count[task] = count[task]? count[task]+1:1
    });
    
    const sortedCount = Object.values(count).sort((a,b) => b-a);
    
    let idleCount = (sortedCount[0] - 1) * n;
    
    for(let i=1;i<sortedCount.length;i++){
        idleCount -= Math.min(sortedCount[i], sortedCount[0] - 1);
    }
  
    
    return idleCount<0? tasks.length : tasks.length + idleCount;
};