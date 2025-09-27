var longestSubstring = function (s, k) {
  let maxLen = 0;
  const n = s.length;

  // Loop over possible number of unique characters (1 to 26)
  for (let targetUnique = 1; targetUnique <= 26; targetUnique++) {
    const freq = new Array(26).fill(0);
    let left = 0,
      right = 0;
    let unique = 0;
    let countAtLeastK = 0;

    console.log("loop runnign");

    while (right < n) {
      console.log("while loop runnign");
      // expand right
      const idxRight = s.charCodeAt(right) - 97;
      if (freq[idxRight] === 0) unique++;
      freq[idxRight]++;
      if (freq[idxRight] === k) countAtLeastK++;
      right++;

      // shrink left if too many unique
      while (unique > targetUnique) {
        const idxLeft = s.charCodeAt(left) - 97;
        if (freq[idxLeft] === k) countAtLeastK--;
        freq[idxLeft]--;
        if (freq[idxLeft] === 0) unique--;
        left++;
      }

      // check valid window
      if (unique === targetUnique && unique === countAtLeastK) {
        maxLen = Math.max(maxLen, right - left);
      }
    }
  }

  return maxLen;
};

console.log(longestSubstring("aaabb", 3)); // Output: 3 ("aaa")
