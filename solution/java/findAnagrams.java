
import java.util.*;

class findAnagrams {

    public static void main(String[] args) {
        System.out.println(findAnagrams("cbaebabacd", "abc"));
    }

    public static List<Integer> findAnagrams(String s, String p) {
        if (s.length() < p.length())
            return new ArrayList<>();

        int[] pCount = new int[26];
        int[] sCount = new int[26];
        List<Integer> startIndices = new ArrayList<>();
        int matches = 0;

        for (int i = 0; i < p.length(); i++) {
            sCount[s.charAt(i) - 'a']++;
            pCount[p.charAt(i) - 'a']++;
        }

        for (int i = 0; i < 26; i++) {
            matches += sCount[i] == pCount[i] ? 1 : 0;

            if (matches == 26)
                startIndices.add(0);
        }

        for (int index = 0, lo = 0, hi = p.length(); hi < s.length(); hi++) {
            index = s.charAt(hi) - 'a';

            sCount[index]++;
            if (pCount[index] == sCount[index]) {
                matches++;
            } else if (pCount[index] + 1 == sCount[index]) {
                matches--;
            }

            index = s.charAt(lo) - 'a';

            sCount[index]--;
            if (pCount[index] == sCount[index]) {
                matches++;
            } else if (pCount[index] - 1 == sCount[index]) {
                matches--;
            }
            lo++;

            if (matches == 26)
                startIndices.add(lo);
        }

        return startIndices;

    }
}