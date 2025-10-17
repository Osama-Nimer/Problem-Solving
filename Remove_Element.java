public class Remove_Element {
    public int removeElement(int[] nums, int val) {
        int count = 0;
        for (int i = 0; i < nums.length; i++) {
            if(nums[i] == val)
                count++;
        }

        int[] values = new int[nums.length - count];

        int index = 0;

        for (int i = 0; i < nums.length; i++)
        {
            if(nums[i] == val)
                continue;
            else{
                values[index] = nums[i];
                index++;
            }
        }

        for (int i = 0; i < values.length; i++) {
            nums[i] = values[i];
        }
        
        return (values.length);
    }
}