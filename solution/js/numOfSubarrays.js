/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let res = 0;
  let odd = 0;
  for (let lo = 0, mid = 0, hi = 0; hi < nums.length; hi++) {
    odd += nums[hi] % 2 ? 1 : 0;

    while (odd > k) {
      if (nums[lo] % 2) odd--;
      lo++;
      mid = lo;
    }

    if (odd === k) {
      console.log("valid odd");

      while (nums[mid] % 2 === 0) {
        mid++;
      }

      res += mid - lo + 1;
    }
  }
  return res;
};

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));

/// 2 2 2
