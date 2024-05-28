/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const require = {};
    const mapping = {}; //선수:들을과목
    
    for(let i=0;i<numCourses;i++){
        require[i] = [];
        mapping[i] = [];
    }
    
    prerequisites.forEach(([a, b]) => {
        require[a] = [...require[a], b];
        mapping[b] = [...mapping[b], a];
    });
    
    let next = [];
    
    Object.entries(require).forEach(([k,v]) =>{
        if(v.length === 0){
            next.push(k);
    }})
    

    while(next.length){
        const newNext = [];
        next.forEach((val) => {
            mapping[val].forEach(key => {
                require[key].splice(require[key].indexOf(val), 1);
                if(require[key].length === 0){
                    newNext.push(key);
                }
            });
            delete require[val];
        });
        next = newNext;
    }
    
    return Object.keys(require).length === 0;
};