function middleNode(head: number[]): number[] {
  let m = Math.round(head.length / 2) - 1;
  let e = head.length + 1;
  let res = [];

  while (m <= e) {
    res.push(head[m]);
    m++;
    e--;
  }
  return res;
}

// console.log(Math.abs(-4 * -4));
console.log(middleNode([10, 11, 12, 13, 14]));

// while (s <= middle && e >= middle) {
//   console.log(str[s], 'S');
//   s++;
//   if (s == middle) {
//     console.log(0);
//     continue;
//   }
//   if (e == middle) {
//     continue;
//     console.log(0);
//   }
//   console.log(str[e]);
//   e--;
// }

// TWo

// let s = 0;
// let e = 1;
// let end = str.length - 1;
// let res = [];
// // if (str[s] == c) {
// //   res.push(0);
// // }
// while (s < end) {
//   if (str[e] == c) {
//     res.push(e - s);
//     if (s == e) e = s + 1;
//     s++;
//   } else {
//     e++;
//   }
// }
