
let searchInsert = function(nums: number[], target:number) {

   let start = 0;
   let end = nums.length -1;
   
   while (start <= end) {
      console.log(start);
      
      let middle = Math.floor(start + end /2)
      if(target > nums[middle]) {
         start = middle + 1;
      } else if (target < nums[middle]) {
         end = middle -1
      } else {
         return nums[middle]
      }
   }
   
   return end+1

   
};

console.log(searchInsert([1,3,5,6],4));



