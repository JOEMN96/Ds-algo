function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(arr[i], arr[j + 1]);
        var temp = arr[j];
        arr[i] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([100, 1, 12112, 10, 23, 341, 142, 232, 231]));
