// Consider an array arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}, and the target = 23.
// [1, 3, 5, 6, 5, 3]

function binarySearch(arr, target) {
  let l = 0,
    h = arr.length;
  while (l < h) {
    const m = l + Math.floor((h - l) / 2);

    if (arr[m] === target) return true;

    if (arr[m] < target) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return false;
}

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 91));
