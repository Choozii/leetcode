/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function(numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0);
    const map = new Map();
    const q = [];
    const order = [];
    
    
    for(let i=0;i<prerequisites.length;i++){
        const [course, pre] = prerequisites[i];
        
        map.get(pre)? map.get(pre).push(course) : map.set(pre, [course]);
        indegree[course]++;
    }
    
    for(let i=0;i<indegree.length;i++){
        if(indegree[i] === 0){
            q.push(i);
        }
    }
    
    while(q.length > 0){
        const course = q.shift();
        
        const nextCourses = map.get(course) || [];
        
        nextCourses.forEach(next => {
            indegree[next]--;
            if(indegree[next] === 0){
                q.push(next);
            }
        })
        
        map.delete(course);
        order.push(course);
    }
        
    return numCourses === order.length;
    
};