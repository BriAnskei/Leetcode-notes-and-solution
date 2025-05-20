/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const n = heights.length;
  heights.sort((a, b) => b - a);
  const stack = [];

  if (heights.length === 1 && heights[0] === 0) {
    return heights[0];
  }

  for (let i = 0; i < n; i++) {
    if (heights[i] > 0) {
      stack.push(heights[i]);
    }

    if (stack.length >= 2 && (i + 1) % 2 === 0) {
      const val1 = stack.pop();
      const val2 = stack.pop();
      let res = Math.ceil(val2 / val1);

      stack.push(val1 * res);
    }
  }

  return stack[0];
};

console.log(largestRectangleArea([9]));
