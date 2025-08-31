/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const prevIndex = new Map();
  let res = 0;

  for (let lo = 0, hi = 0; hi < s.length; hi++) {
    let i = prevIndex.get(s[hi]) ?? -1;

    while (lo <= i) {
      lo++;
    }
    res = Math.max(res, hi - lo + 1);
    prevIndex.set(s[hi], hi);
  }
  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
