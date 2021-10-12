var countNegatives = function(grid:number[][]) {
    let count = 0;
    for(let i= 0; i < grid.length; i++) {
       grid[i].forEach(item => {
          if( item < 0) {
             count ++;
          }
       })
    }
    return count
};
console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));




