/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    const a = (coordinates[1][1] - coordinates[0][1])/(coordinates[1][0] - coordinates[0][0]);
    
  for(let i=1;i<coordinates.length-1;i++){
     const coordinateA = (coordinates[i+1][1] - coordinates[i][1])/(coordinates[i+1][0] - coordinates[i][0]);
      
      if(coordinateA === Infinity || coordinateA === -Infinity){
          if(a !== Infinity && a !== -Infinity){
              return false;
          }
      }else if(coordinateA !== a){
          return false;
      };
  }  
    return true;
};