import java.util.*;

public class decrypt {

    public static void main(String[] args) {
        System.out.println(maximumStrongPairXor(new int[] { 1, 2, 3, 4, 5 }));
    }

    public static int maximumStrongPairXor(int[] nums) {
        int res = 0;
        Arrays.sort(nums);

        int lo = 0, hi = 0;
        int n = nums.length;

        while (lo < hi || hi < n) {
            int currMin = Math.min(nums[lo], nums[hi]);
            int currDiff = Math.abs(nums[lo] - nums[hi]);

            if (currDiff <= currMin) {
                res = Math.max(res, nums[lo] ^ nums[hi]);
                hi++;
            } else {
                hi = lo + 1;
                lo++;
                
            }

            if (hi == n) {
                hi = lo + 1;
                lo++;
            }

        }

        return res;
    }

}
