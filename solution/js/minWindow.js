var minWindow = function (s, t) {
  const countT = {};
  const window = {};
  let res = [-1, -1];
  let resLen = Infinity;

  for (let i = 0; i < t.length; i++) {
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  let reqMatch = Object.keys(countT).length,
    match = 0;
  console.log("requ match: ", reqMatch);

  for (let l = 0, h = 0; h < s.length; h++) {
    window[s[h]] = (window[s[h]] || 0) + 1;

    if (countT[s[h]] && window[s[h]] === countT[s[h]]) match += 1;

    console.log("current loop", l, h, match);

    while (match === reqMatch) {
      console.log("Mathcked");

      if (h - l + 1 < resLen) {
        res = [l, h];
        resLen = h - l + 1;
      }
      window[s[l]]--;
      if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
        console.log("decrementing marthces");

        match--;
      }
      console.log("incrementing left: ", l);

      l++;
    }
  }

  console.log(window);

  const [start, end] = res;
  return resLen !== Infinity ? s.slice(start, end + 1) : "";
};

console.log(minWindow("ADOBECCDEBANC", "ABCC")); // "BANC"
