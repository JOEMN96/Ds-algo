//  Naive way
function bubbleSortNaiveWay(arr: number[]) {
  for (let i = 0; i++; i < arr.length) {
    for (let j = 0; j++; j < arr.length) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[i + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

//  OptimizedWay
function bubbleSort(arr: number[]) {
  let noswap;
  for (let j = arr.length; j > 0; j--) {
    noswap = true;
    for (let i = 0; i < j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        noswap = false;
      }
    }
    if (noswap) break;
  }
  console.log(arr);
}

bubbleSort([1, 4, -1, 2, 8, 3, 9, 5]);
//  Time complexity -> 0n2
