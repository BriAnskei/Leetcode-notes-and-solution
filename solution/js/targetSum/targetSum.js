/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let res1 = 0;
  for (let i = 0, curSub = 0; i < nums.length; i++) {
    let result = 0;
    for (let j = 0; j < nums.length; j++) {
      result = j === curSub ? (result -= nums[j]) : (result += nums[j]);
    }

    if (result === target) {
      res1++;
    }
    curSub++;
  }

  let res2 = 0;
  for (let i = 0, curAdd = 0; i < nums.length; i++) {
    let result = 0;
    for (let j = 0; j < nums.length; j++) {
      result  j === curAdd ? (result += nums[j]) : (result -= nums[j]);
    }

    if (result === target) {
      res2++;
    }
    curAdd++;
  }

  return Math.max(res1, res2);
};

console.log(findTargetSumWays([1], 1));
