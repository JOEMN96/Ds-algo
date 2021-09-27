// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       let temp = arr[i];
//       if (arr[i] > arr[j]) {
//         arr[j] = arr[j + 1];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

console.log(bubbleSort([100, 1, 12112, 10, 23, 341, 142, 232, 231]));
