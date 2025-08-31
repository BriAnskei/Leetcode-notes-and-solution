/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let res = 0;
  const type = new Map();

  for (let l = 0, h = 0; h < fruits.length; h++) {
    type.set(fruits[h], (type.get(fruits[h]) || 0) + 1);

    while (type.size > 2) {
      type.set(fruits[l], type.get(fruits[l]) - 1);
      if (type.get(fruits[l]) === 0) {
        type.delete(fruits[l]);
      }

      l++;
    }

    res = Math.max(res, h - l + 1);
  }

  return res;
};

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));

[1, 2, 3, 5, 2];
[0, 1, 2, 2];
