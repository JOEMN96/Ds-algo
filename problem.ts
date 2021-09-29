var removeDuplicates = function(nums:number[]) {

   nums.forEach((item,i) => {
      if(item == nums[i+1]) {
         nums.splice(i+1,1)
         removeDuplicates(nums)
      }
   })

   return nums

};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));


