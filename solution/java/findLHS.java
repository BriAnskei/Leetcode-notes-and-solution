
import java.util.*;

public class findLHS {
     public static void main(String[] args) {





        System.out.println(findLHS(new int[]{1,3,2,2,5,2,3,7}));
        
    }

    public static int findLHS(int[] nums) {
        Arrays.sort(nums);
        int left = 0, res = 0;
        for (int right = 0; right < nums.length; right++) {
            while(nums[right] - nums[left] > 1) {
                left++;
            }

            if(nums[right] - nums[left] ==  1) {
                res = Math.max(res, right - left + 1);
            }
        }
        return res;
    }
}