function getCount(num: number, nums: number[]): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === num) count++;
    }
    return count;
  }

// function singleNumber(nums: number[]): number {
//   for (let i = 0; i < nums.length; i++) {
//     let num: number = getCount(nums[i],nums);
//     if (num === 1) return nums[i];
//   }
//   return 0;
// }