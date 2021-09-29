var mergeTwoLists = function (l1, l2) {
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
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4, 4, 5, 22]));
