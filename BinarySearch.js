function search(arr, val) {
  let start = 0;
  let end = arr.length;
  let middle = Math.floor((start + end) / 2);

  while (val !== arr[middle] && start <= end) {
    if (arr[middle] > val) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] == val) {
    return val;
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 6));
