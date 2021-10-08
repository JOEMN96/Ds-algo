function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = 0;
  for (let i = start + 1; i < arr.length; i++) {
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
  return swapIndex;
}

pivot([7, 4, 2, 5, 3, 8, 1, 9, 6]);
