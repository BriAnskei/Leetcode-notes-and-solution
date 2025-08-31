/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = [];
  let monstRec = 0;
  const n = heights.length;
  for (let i = 0; i < n; i++) {
    let start = i;
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const [index, height] = stack.pop();
      monstRec = Math.max(monstRec, height * (i - index));
      start = index;
    }

    stack.push([start, heights[i]]);
  }
  console.log("Left stack: ", stack);

  for (let [index, height] of stack) {
    monstRec = Math.max(monstRec, height * (n - index));
  }
  return monstRec;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
