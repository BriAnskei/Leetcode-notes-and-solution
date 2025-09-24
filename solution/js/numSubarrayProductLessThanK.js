/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let res = 0;
  for (let prod = 1, l = 0, h = 0; h < nums.length; h++) {
    prod *= nums[h];

    while (l <= h && prod >= k) {
      prod /= nums[l];
      l++;
    }
    console.log("adding to the rews: ", h - l + 1, l, h);

    res += h - l + 1;
  }
  return res;
};

console.log(numSubarrayProductLessThanK([1, 2, 3, 5, 2], 3));
