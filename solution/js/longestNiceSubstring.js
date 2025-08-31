/**
 * @param {number[]} sortArr
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (nums.length === 1) {
    return 0;
  }
  const sortArr = nums.sort((a, b) => a - b);
  let res = Infinity;
  let left = 0;
  for (let right = k - 1; right < sortArr.length; right++) {
    res = Math.min(res, nums[right] - nums[left]);

    left++;
  }
  return res;
};

console.log(
  minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6)
);
