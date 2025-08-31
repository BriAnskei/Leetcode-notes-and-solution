var maximumSubarraySum = function (nums, k) {
  const numbers = new Set();
  let res = 0;
  for (let currentSum = 0, lo = 0, hi = 0; hi < nums.length; hi++) {
    while (numbers.has(nums[hi])) {
      currentSum -= nums[lo];
      numbers.delete(nums[lo]);
      lo++;
    }
    currentSum += nums[hi];
    numbers.add(nums[hi]);

    if (numbers.size === k && hi - lo + 1 === k) {
      res = Math.max(res, currentSum);

      currentSum -= nums[lo];
      numbers.delete(nums[lo]);
      lo++;
    }
  }

  return res;
};

console.log(maximumSubarraySum([4, 4, 4], 3));
