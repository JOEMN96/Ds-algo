function merge(l1, l2) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < l1.length && j < l2.length) {
    if (l1[i] < l2[j]) {
      res.push(l1[i]);
      i++;
    } else {
      res.push(l2[j]);
      j++;
    }
  }

  while (i < l1.length) {
    res.push(l1[i]);
    i++;
  }
  while (j < l2.length) {
    res.push(l2[j]);
    j++;
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(left, right);
}

console.log(mergeSort([1, 2, 4, 20, 1, 3, 4, 4, 5, 22]));
