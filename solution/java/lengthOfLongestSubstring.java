
import java.util.*;

public class lengthOfLongestSubstring {
    public static void main(String[] args) {

    }

    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> prevIndex = new HashMap<>();
        int res = 0;

        for (int lo = 0, hi = 0; hi < s.length(); hi++) {
            int i = prevIndex.getOrDefault(s.charAt(hi), -1);

            while(lo <= i) {
                lo++;
            }
            prevIndex.put(s.charAt(hi), hi);
            res = Math.max(res, hi - lo + 1);
        }

        return res;
    }

}
