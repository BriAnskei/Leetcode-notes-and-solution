/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  const stringNum = num.toString();
  let res = 0;

  let left = 0;
  for (let right = k; right <= stringNum.length; right++) {
    const subVal = stringNum.slice(left, right);

    console.log(num, subVal, num % parseInt(subVal) === 0);

    if (num % parseInt(subVal) === 0) {
      res++;
    }
    left++;
  }

  return res;
};

console.log(divisorSubstrings(10, 1));
