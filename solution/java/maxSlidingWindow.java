import java.util.*;

class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        Deque<Integer> q = new ArrayDeque<>();
        int[] res = new int[nums.length - k + 1];

        for (int l = 0, h = 0; h < nums.length; h++) {
            while (!q.isEmpty() && nums[q.peekLast()] < nums[h]) {
                q.pollLast();
            }

            q.offerLast(h);

            if (q.getFirst() < l) {
                q.pollFirst();
            }

            if (h - l + 1 == k) {
                res[l] = nums[q.peekFirst()];
                l++;
            }
        }

        return res;

    }
}