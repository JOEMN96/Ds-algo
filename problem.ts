function findDisappearedNumbers(nums: number[]): number[] {
  nums = nums.sort((a, b) => a - b);

  let s = 0;
  let e = nums.length - 1;
  let next = nums[0];
  let res: number[] = [];
  console.log(nums);

  while (s < e) {
    next++;

    if (nums[s] != nums[s - 1] && nums[s + 1] !== next) {
      console.log(nums[s], nums[s - 1]);
      res.push(next);
    } else {
      if()
    }
    s++;
  }

  return res;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
