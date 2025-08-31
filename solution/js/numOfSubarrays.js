/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let res = 0;
  let odd = 0;
  for (let lo = 0, mid = 0, hi = 0; hi < nums.length; hi++) {
    if (nums[hi] % 2) {
      odd++;
    }

    while (odd > k) {
      console.log("dec odd execute");

      odd -= nums[lo] % 2 ? 1 : 0;
      lo++;
      mid = lo;
    }

    if (odd === k) {
      while (nums[mid] % 2 !== 1) {
        mid++;
      }
      res += mid - lo + 1;
    }
  }

  return res;
};

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2], 2));

/// 2 2 2
