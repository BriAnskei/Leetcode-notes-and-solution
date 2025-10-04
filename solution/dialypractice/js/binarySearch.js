// Consider an array arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}, and the target = 23.
// [1, 3, 5, 6, 5, 3]

function binarySearch(arr, target) {
  let l = 0,
    h = arr.length;

  while (l < h) {
    const mid = l + Math.floor((h - l) / 2);

    console.log("current mid: ", mid);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      l = mid + 1;
    } else if (arr[mid] > target) {
      h = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 91));
