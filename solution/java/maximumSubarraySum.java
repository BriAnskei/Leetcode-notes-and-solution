import java.util.*;

public class maximumSubarraySum {
    public static void main(String[] args) {
        System.out.println(maximumSubarraySum(new int[] { 2, 2, 3, 4, 5 }, 3));
    }
    // prevIndex faster version
    public static int maximumSubarraySum(int[] nums, int k) {
        int res = 0;
        Map<Integer, Integer> prevIdx = new HashMap<>();
        int curSum = 0;
        int l = 0;

        for (int r = 0; r < nums.length; r++) {
            curSum += nums[r];
            int i = prevIdx.getOrDefault(nums[r], -1);

            while (l <= i || r - l + 1 > k) {
                curSum -= nums[l];
                l++;
            }

            if (r - l + 1 == k) {
                res = Math.max(res, curSum);
            }

            prevIdx.put(nums[r], r);
        }

        return res;
    }


    //count (frequency map) Version
    public int maximumSubarraySum(int[] nums, int k) {
        int res = 0;
        Map<Integer, Integer> count = new HashMap<>();
        int curSum = 0;
        int l = 0;

        for (int r = 0; r < nums.length; r++) {
            curSum += nums[r];
            count.put(nums[r], count.getOrDefault(nums[r], 0) + 1);

            if (r - l + 1 > k) {
                count.put(nums[l], count.get(nums[l]) - 1);
                if (count.get(nums[l]) == 0) {
                    count.remove(nums[l]);
                }
                curSum -= nums[l];
                l++;
            }

            if (count.size() == r - l + 1 && r - l + 1 == k) {
                res = Math.max(res, curSum);
            }
        }

        return res;
    
}

}
