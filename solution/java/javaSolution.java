import java.util.*;

public class javaSolution {
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("aaaa"));
    }

    public int findLengthOfLCIS(int[] nums) {
        int res = 0;

        for (int prevVal = 0, lo = 0, hi = 0; hi < nums.length; hi++) {
            if (prevVal >= nums[hi])
                lo = hi;
            res = Math.max(res, hi - lo + 1);
            prevVal = nums[hi];
        }
        return res;
    }
}