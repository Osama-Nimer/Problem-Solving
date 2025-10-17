function removeDuplicates(nums: number[]): number {
    let arr = [-200];
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (arr.includes(num)) {
            continue;
        } else {
            arr[index] = num;
            index++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }
    return arr.length;
};





function removeDuplicates1(nums: number[]): number {
    let arr : number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(nums[i])) {
            nums[i] = 111;
        }
        else {
            arr.push(nums[i]);
        }
    }
    nums.sort((a, b) => a - b);
    return arr.length;
};