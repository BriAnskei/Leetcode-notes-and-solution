/**
 * @param {number[]} nums
 * @return {number}
 */
var containsNearbyDuplicate = function (nums, k) {
  const prevIndex = new Map();

  for (let hi = 0; hi < nums.length; hi++) {
    let lo = prevIndex.get(nums[ho]);

    if (lo !== undefined && hi - lo <= k) {
      return true;
    }

    prevIndex.set(nums[i], i);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
