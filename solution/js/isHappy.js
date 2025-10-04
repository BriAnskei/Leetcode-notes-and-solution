/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function _cherker(n, vals) {
    let sum = 0;
    while (n > 0) {
      sum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }

    if (sum === 1) return true;
    if (vals.has(sum)) return false;

    vals.add(sum);
    return _cherker(sum, vals);
  }

  const vals = new Set();
  return _cherker(n, vals);
};

console.log(isHappy(19));
