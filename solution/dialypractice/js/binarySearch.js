// Consider an array arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}, and the target = 23.
// [1, 3, 5, 6, 5, 3]

function binarySearch(arr, target) {
  let lo = 0,
    hi = arr.length;
  while (lo < hi) {
    const m = lo + Math.floor((hi - lo) / 2);

    if (arr[m] === target) return m;

    if (arr[m] < target) {
      lo = m + 1;
    } else {
      hi = m - 1;
    }
  }

  return -1;
}

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23));
