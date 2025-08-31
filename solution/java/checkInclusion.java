
class checkInclusion {

    public static void main(String[] args) {
        System.out.println(checkInclusion("ab", "eidbaooo"));
    }

    public static boolean checkInclusion(String s1, String s2) {
        int[] s1Count = new int[26];
        int[] s2Count = new int[26];
        int count = 0;

        for (int i = 0; i < s1.length(); i++) {
            s1Count[s1.charAt(i) - 'a']++;
            s2Count[s2.charAt(i) - 'a']++;
        }

        for (int i = 0; i < 26; i++) {
            count += s1Count[i] == s2Count[i] ? 1 : 0;
        }

        for (int index = 0, lo = 0, hi = s1.length(); hi < s2.length(); hi++) {
            if (count == 26)
                return true;

            index = s2.charAt(hi) - 'a';
            s2Count[index]++;
            if (s1Count[index] == s2Count[index]) {
                count++;

            } else if (s1Count[index] + 1 == s2Count[index]) {
                count--;
            }

            index = s2.charAt(lo) - 'a';
            s2Count[index]--;
            if (s1Count[index] == s2Count[index]) {
                count++;

            } else if (s1Count[index] - 1 == s2Count[index]) {
                count--;
            }
            lo++;
        }

        return count == 26;
    }
}