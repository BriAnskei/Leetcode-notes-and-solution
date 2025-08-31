/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let res = 0;

  for (let zeros = 0, l = 0, h = 0; h < nums.length; h++) {
    zeros += nums[h] ? 0 : 1;

    while (zeros > k) {
      zeros -= nums[l] ? 0 : 1;
      l++;
    }

    res = Math.max(res, h - l + 1);
  }
  return res;
};

console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
