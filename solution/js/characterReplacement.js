var characterReplacement = function (s, k) {
  const count = new Map();
  let res = 0;

  for (let maxF = 0, lo = 0, hi = 0; hi < s.length; hi++) {
    count.set(s[hi], (count.get(s[hi]) || 0) + 1);
    maxF = Math.max(maxF, count.get(s[hi]));

    while (hi - lo + 1 - maxF > k) {
      count.set(s[lo], count.get(s[lo]) - 1);
      lo++;
    }

    res = Math.max(res, hi - lo + 1);
  }

  return res;
};

console.log(characterReplacement("AABABBA", 1));
