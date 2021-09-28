var removeDuplicates = function(nums:number[]) {
   let obj:any = {}
   for (const val of nums) {
      obj[val] = obj[val] ? obj[val] + 1 : obj[val] =1
   }
   for (let i = 0; i < nums.length; i++) {
      
     
   }
   console.log(obj);
   
};

console.log(removeDuplicates([1,2,2,1,3,3]));
