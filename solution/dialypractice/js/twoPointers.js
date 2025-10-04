// Input: arr[] = {10, 20, 35, 50}, target =70
// Output:  Yes
// Explanation : There is a pair (20, 50) with given target.

// Input: arr[] = {10, 20, 30}, target =70
// Output :  No
// Explanation : There is no pair with sum 70

// Input: arr[] = {-8, 1, 4, 6, 10, 45], target = 16
// Output: Yes
// Explanation : There is a pair (6, 10) with given target.

function twoSum(arr, target) {
  let l = 0,
    h = arr.length;

  while (l < h) {
    const res = arr[l] + arr[h];

    if (res === target) return true;

    if (res < target) {
      l++;
    } else {
      h--;
    }
  }
  return false;
}

console.log(twoSum([10, 20, 35, 50], 70));
