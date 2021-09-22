// Naive Way
// function findSubArr(arr, n) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - n + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < n; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

function findSubArr(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  maxSum = tempSum;
  for (let j = n; n < arr.length; j++) {
    tempSum = tempSum - arr[j - n] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(findSubArr([1, 1, 4, 3, 4, 3, 4, 8, 7, 8, 4, 2, 1, 2], 2));
