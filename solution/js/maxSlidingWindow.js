/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let stock = [];

  const res = [];

  for (let l = 0, h = 0; h < nums.length; h++) {
    while (stock.length && stock[stock.length - 1] <= nums[h]) {
      stock.pop();
    }

    stock.push(nums[h]);

    if (h - l + 1 === k) {
      res.push(stock[0]);
      l++;
    }
  }
  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

// output: [3,3,5,5,6,7]
