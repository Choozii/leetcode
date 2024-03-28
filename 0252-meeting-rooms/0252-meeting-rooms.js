/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    const attend = [];
    
    for(let i=0;i<intervals.length;i++){
        const [start, end] = intervals[i];
        
        for(let j=start;j<end;j++){
            if(!attend[j]){
                attend[j] = true;                
            }else{
                return false;
            }
        }
    }
    
    return true;
};