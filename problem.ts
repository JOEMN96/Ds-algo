function minDeletionSize(strs: string[]): number {
  let res = 0;
  let row: string[] = [];
  for (let i = 0; i < strs.length; i++) {
    let j = 0;
    let temp = '';
    while (j < strs[i].length) {
      if (!strs[j][i]) {
        j++;
        continue;
      }
      temp += strs[j][i];
      j++;
    }
    row.push(temp);
  }

  console.log(row);

  row.forEach((str) => {
    let x = 0;
    while (x < str.length - 1) {
      let diff = null;
      console.log(str[x]);

      // if (!str[x + 1]) {
      //   diff = str[x - 1].charCodeAt(0) - str[x].charCodeAt(0);
      // } else {
      //   diff = str[x].charCodeAt(0) - str[x + 1].charCodeAt(0);
      // }
      if (str[x].charCodeAt(0) > str[x + 1].charCodeAt(0)) {
        res++;
        x++;
        continue;
      }
      x++;
    }
  });

  return res;
}

console.log(minDeletionSize(['zyx', 'wvu', 'tsr']));
