/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  const count = new Map();
  let res = 0;

  for (let Lf = 0, Ln = 0, h = 0; h < nums.length; h++) {
    count.set(nums[h], (count.get(nums[h]) || 0) + 1);

    while (count.size > k) {
      count.set(nums[Ln], count.get(nums[Ln]) - 1);

      if (count.get(nums[Ln]) === 0) count.delete(nums[Ln]);

      Ln++;
      Lf = Ln;
    }

    while (count.get(nums[Ln]) > 1) {
      count.set(nums[Ln], count.get(nums[Ln]) - 1);
      Ln++;
    }

    if (count.size === k) {
      res += Ln - Lf + 1;
    }
  }

  return res;
};

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2));
// 8



[1,3,-1,-3,5,3,6,7], k = 3




// small -> max heap (a > b)
// [4, 3, 2]

// large -> min heap (a < b)
// [2 ,4, 5, 6, 7]

// {4: 2}

    1
  /   \
2      3
 

[1, 2, 4, 5]

