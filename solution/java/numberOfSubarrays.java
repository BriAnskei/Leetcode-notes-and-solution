class numberOfSubarrays {
    public static void main(String[] args) {
        System.out.println(numberOfSubarrays(new int[] { 1, 1, 2, 1, 1 }, 3));
    }

    public static int numberOfSubarrays(int[] nums, int k) {
        int res = 0;
        int odd = 0;
        for (int l = 0, m = 0, h = 0; h < nums.length; h++) {
            if (nums[h] % 2 == 1) {
                System.err.println("is " + nums[h] + " is odd? : ");
                odd++;
            }

            System.err.println("Current loop" + l + " " + m + " " + h + " Odd: " + odd);
            while (odd > k) {
                System.err.println("Decrementing odd: " + l);
                odd -= nums[l] % 2 == 1 ? 1 : 0;
                l++;
                m = l;
            }

            if (odd == k) {
                while (nums[m] % 2 != 1)
                    m++;
                res += m - l + 1;
            }
        }
        return res;
    }
}