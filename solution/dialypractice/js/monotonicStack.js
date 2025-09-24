// Given an array of integers, for each element find the next greater element (NGE) to its right. If no such element exists, output -1.

// Example
// Input:
// arr = [2, 1, 5, 3, 6]
// Output:
// [5, 5, 6, 6, -1]

function monotonicIncreasing(nums) {
  const res = new Array(nums.length - 1);
  const stock = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stock.length && stock[stock.length - 1] <= nums[i]) {
      stock.pop();
    }

    if (stock[stock.length - 1] > 0) res[i] = stock[stock.length - 1];
    else res[i] = -2;

    stock.push(nums[i]);
  }
  return res;
}
console.log(monotonicIncreasing([2, 1, 5, 3, 6]));
