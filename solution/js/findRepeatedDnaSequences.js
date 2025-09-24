/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const res = new Set();
  const count = new Map();
  for (let l = 0, h = 0; h < s.length; h++) {
    if (h - l + 1 === 10) {
      const windowString = s.slice(l, h + 1);
      count.set(windowString, (count.get(windowString) || 0) + 1);

      if (count.get(windowString) > 1) {
        console.log("found 2 repating DNA: ", windowString, l, h);

        res.add(windowString);
      }
      l++;
    }
  }
  return Array.from(res);
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
