var removeElement = function(nums:number [], val:number) {

   for (let i = 0; i < nums.length; i++) {
      console.log(nums[i]);
      
      if(nums[i] == val) {
         nums.splice(i,1)
         i--
      }
   }

   return nums
      
};

console.log(removeElement([3,2,2,2,2,3],3));



