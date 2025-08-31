
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int characterReplacement(String s, int k) {
        Map<Character, Integer> count = new HashMap<>();
        int res = 0;
        for (int maxF = 0, l = 0, h = 0; h < s.length(); h++) {
            count.put(s.charAt(h), count.getOrDefault(s.charAt(h), 0) + 1);
            maxF = Math.max(maxF, count.get(s.charAt(h)));

            while (h - l + 1 - maxF > k) {
                count.put(s.charAt(l), count.getOrDefault(s.charAt(l), 0) - 1);
                l++;
            }

            res = Math.max(res, h - l + 1);

        }
        return res;
    }
}