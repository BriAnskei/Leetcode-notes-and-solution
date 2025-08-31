public class findMaxConsecutiveOnes {
    public static void main(String[] args) {
        
    }


     public int findMaxConsecutiveOnes(int[] nums) {
        int res = 0;

        for(int lo = 0, hi = 0;  hi < nums.length;hi++) {
            if(nums[hi] != 1){
                res = Math.max(res, hi  - lo);
            }

            if(hi == nums.length - 1){
                res = Math.max(res, hi - lo + 1);
            }
        }

        return res;
    }

}
