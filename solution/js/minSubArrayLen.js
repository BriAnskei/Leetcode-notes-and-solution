/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let res = Infinity;

  for (let curSum = 0, l = 0, h = 0; h < nums.length; h++) {
    curSum += nums[h];

    while (curSum >= target) {
      res = Math.min(res, h - l + 1);
      curSum -= nums[l];
      l++;
    }x
  }

  return res === Infinity ? 0 : res;
};

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
