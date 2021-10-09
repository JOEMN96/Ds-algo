function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      //   Swap
      swapIndex++;
      let temp = arr[swapIndex];
      arr[swapIndex] = arr[i];
      arr[i] = temp;
    }
  }
  let temp = arr[start];
  arr[start] = arr[swapIndex];
  arr[swapIndex] = temp;
  console.log(arr);
  return swapIndex;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

console.log(pivot2([7, 4, 2, 5, 3, 8, 1, 9, 6]));
