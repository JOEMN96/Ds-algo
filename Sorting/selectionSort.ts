function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // If statement is for preventing unnecessary swaps
    if (i != lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  console.log(arr);
}

// On2 Time complexity
selectionSort([0, 2, 9, 4, 7, 8, 6]);
