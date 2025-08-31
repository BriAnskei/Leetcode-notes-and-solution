/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);

  let matches = 0;
  let startIndices = [];

  for (let i = 0; i < p.length; i++) {
    sCount[s[i].charCodeAt() - 97]++;
    pCount[p[i].charCodeAt() - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    matches += pCount[i] === sCount[i] ? 1 : 0;
    if (matches === 26) startIndices.push(0);
  }

  for (let index = 0, lo = 0, hi = p.length; hi < s.length; hi++) {
    index = s[hi].charCodeAt() - 97;
    sCount[index]++;
    if (pCount[index] === sCount[index]) {
      matches++;
    } else if (pCount[index] + 1 === sCount[index]) {
      matches--;
    }

    index = s[lo].charCodeAt() - 97;
    sCount[index]--;
    if (pCount[index] === sCount[index]) {
      matches++;
    } else if (pCount[index] - 1 === sCount[index]) {
      matches--;
    }
    lo++;

    if (matches === 26) startIndices.push(lo);
  }

  return startIndices;
};

console.log(findAnagrams("abab", "ab"));
