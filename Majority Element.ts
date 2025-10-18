function majorityElement(nums: number[]): number {
  let arr: number[] = [];
  let mCount: number = 0;
  let val: number = 0;
  let max: number = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i]);
      mCount = count(nums[i], nums);
      if(mCount!==-1){
        if(mCount > max)
        {
          max = mCount;
          val = nums[i];
        }
      }
    }
  }
  return val;
}

function count(num: number, nums: number[]): number {
  let count: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num) count++;
  }
  if (count > nums.length  / 2) return count;
  else return -1;
}
