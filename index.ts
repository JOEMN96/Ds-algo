// MY-Naive Way
function quickSortNAIVE(arr: number[]) {
  let pivotIndex = 0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[start]) {
      let temp = arr[pivotIndex + 1];
      arr[pivotIndex + 1] = arr[i];
      arr[i] = temp;
      pivotIndex++;
    }
  }

  let temp = arr[pivotIndex];
  arr[pivotIndex] = arr[start];
  arr[start] = temp;
  console.log(arr);
}

//  This is the best way cuz in future we can change the start position
function quickSort(arr: number[], start: number = 0, end: number = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start; /* Start is 0 */
  for (let i = swapIndex + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);

  return swapIndex;
}

function swap(arr: number[], swapIdx: number, swap2Idx: number) {
  let temp = arr[swapIdx];
  arr[swapIdx] = arr[swap2Idx];
  arr[swap2Idx] = temp;
}

quickSort([13, 12, 6, 11, 8, 0]);
