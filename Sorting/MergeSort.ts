function merge(arr1: number[], arr2: number[]): number[] {
  let i = 0;
  let j = 0;
  let res: number[] = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else {
      res.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr1[j]);
    j++;
  }

  return res;
}

// merge([100], [4, 1, 5]);

function mergeSort(arr: number[]) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr: number[] = mergeSort(arr.slice(0, mid));
  let rightArr: number[] = mergeSort(arr.slice(mid));
  return merge(leftArr, rightArr);
}

console.log(mergeSort([100, 10, 20, 1, 34, 3, 90, 7]));

// BigO of O(n log n)
