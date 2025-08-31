/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  const res = 0;

  for (let lo = 0, hi = 0; hi < nums.length; hi++) {
    if (nums[hi] !== 1) {
      res = Math.max(res, hi - lo);
      lo = hi + 1;
    }

    if (hi === nums.length - 1) {
      res = Math.max(res, hi - lo);
    }
  }

  return res
};
