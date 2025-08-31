/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);

  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i].charCodeAt() - 97]++;
    s2Count[s2[i].charCodeAt() - 97]++;
  }

  // initial count
  for (let i = 0; i < 26; i++) {
    count += s1Count[i] === s2Count[i] ? 1 : 0;
  }

  for (let index = 0, lo = 0, hi = s1.length; hi < s2.length; hi++) {
    if (count === 26) return true;

    index = s2[hi].charCodeAt() - 97;
    s2Count[index]++;
    if (s1Count[index] === s2Count[index]) {
      count++;
    } else if (s1Count[index] + 1 === s2Count[index]) {
      count--;
    }

    index = s2[lo].charCodeAt() - 97;
    s2Count[index]--;
    if (s1Count[index] === s2Count[index]) {
      count++;
    } else if (s1Count[index] - 1 === s2Count[index]) {
      count--;
    }
    lo++;
  }

  return count === 26;
};

console.log(checkInclusion("abc", "baxyzabc"));
