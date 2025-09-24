/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  let res = 0;
  const count = new Map();

  let maxCount = 0;

  for (let l = 0, h = 0; h < answerKey.length; h++) {
    count.set(answerKey[h], (count.get(answerKey[h]) || 0) + 1);
    if (maxCount < count.get(answerKey[h])) {
      maxCount = count.get(answerKey[h]);
    }
    console.log("current loop: ", l, h);

    while (h - l + 1 - maxCount > k) {
      count.set(answerKey[l], count.get(answerKey[l]) - 1);

      if (maxCount < count.get(answerKey[l])) {
        maxCount = count.get(answerKey[h]);
      }

      l++;
      console.log("len diff tooo high: ", l, h);
    }
    console.log("MAx count: ", maxCount);

    res = Math.max(res, h - l + 1);
  }
  return res;
};

console.log(maxConsecutiveAnswers("TTFTTFTT", 1));
