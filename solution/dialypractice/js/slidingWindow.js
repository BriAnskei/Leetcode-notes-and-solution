// Given an array arr[] and an integer k, we need to calculate the maximum sum of a subarray having size exactly k.

// Input  : arr[] = [5, 2, -1, 0, 3], k = 3
// Output : 6
// Explanation : We get maximum sum by considering the subarray [300, 400]

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4
// Output : 39
// Explanation : We get maximum sum by adding subarray {4, 2, 10, 23} of size 4

function maxSum(arr, k) {
  let res = 0;

  for (let curRes = 0, l = 0, h = 0; h < arr.length; h++) {
    curRes += arr[h];

    if (h - l + 1 === k) {
      res = Math.max(res, curRes);
      curRes -= arr[l];
      l++;
    }
  }
  return res;
}

console.log(maxSum([5, 2, -1, 0, 3], 3));
