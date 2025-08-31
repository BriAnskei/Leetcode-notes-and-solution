// Given an array arr[] and an integer k, we need to calculate the maximum sum of a subarray having size exactly k.

// Input  : arr[] = [5, 2, -1, 0, 3], k = 3
// Output : 6
// Explanation : We get maximum sum by considering the subarray [300, 400]

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4
// Output : 39
// Explanation : We get maximum sum by adding subarray {4, 2, 10, 23} of size 4

function maxSum(arr, k) {
  let res = 0;

  for (let i = 0; i < k; i++) {
    res += arr[i];
  }

  for (let curVal = res, l = 0, h = k; h < arr.length; h++) {
    curVal += arr[h] - arr[l];

    res = Math.max(res, curVal);

    l++;
  }
  return res;
}

console.log(maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
