/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let stock = [];

  const res = [];

  for (let l = 0, h = 0; h < nums.length; h++) {
    while (stock.length && nums[stock[stock.length - 1]] <= nums[h]) {
      stock.pop();
    }

    stock.push(h);

    console.log("current stock", stock, l, h);

    if (stock[0] < l) {
      console.log("condition true");

      stock.shift();
    }
    console.log("update stock", stock, l, h);

    if (h - l + 1 === k) {
      res.push(nums[stock[0]]);
      l++;
    }
  }
  return res;
};

console.log(maxSlidingWindow([1, -1], 1));

// output: [3,3,5,5,6,7]
// [6]
// [3, 3, 5, 5, 6, 7]
