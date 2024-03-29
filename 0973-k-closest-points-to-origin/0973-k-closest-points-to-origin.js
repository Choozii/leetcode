/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    
    for(let i=0;i<points.length;i++){
        points[i] = [...points[i], (points[i][0])**2 + (points[i][1])**2];
    }
    
    points.sort((a,b) => a[2]-b[2]);
    
    const res = [];
    
    for(let i=0;i<k;i++){
        res.push([points[i][0],points[i][1]]);
    }
    
    return res;
};