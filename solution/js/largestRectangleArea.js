/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const n = heights.length;
  const subValues = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    let l = i - 1;
    let r = i + 1;

    if (i === 0) {
      subValues[i] =
        heights[i] >= heights[r] && heights[r] !== 0 ? heights[r] : heights[i];
      continue;
    }

    const leftHeight =
      heights[i] >= heights[l] && heights[l] !== 0 ? heights[l] : -1;
    const rightHeight =
      heights[i] >= heights[r] && heights[r] !== 0 ? heights[r] : -1;

    const maxVal = Math.max(leftHeight, rightHeight);

    if (maxVal === -1) {
      subValues[i] = heights[i];
    } else {
      subValues[i] = maxVal;
    }
  }

  let maxRectanglelar = 0;

  for (let i = 0; i < n; i++) {
    let currVal = 0;
    if (i === n - 1 || subValues[i + 1] === 0) {
      currVal = subValues[i];
    } else {
      currVal = subValues[i] * 2;
    }

    if (maxRectanglelar < currVal) {
      maxRectanglelar = currVal;
    }
  }

  return maxRectanglelar;
};

console.log(largestRectangleArea([2, 0, 2]));
