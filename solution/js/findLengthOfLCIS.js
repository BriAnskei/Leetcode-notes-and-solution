/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let res = 0;

  for (let prevVal = 0, lo = 0, hi = 0;hi <  nums.length; hi++) {
    if (prevVal >= nums[hi]) lo = hi;

    prevVal = nums[hi]
    res = Math.max(res, hi - lo + 1);
  }

  return res;
};
