// function whatIsThis() {
//   console.log(this == 'window');
// }

// let arrpw = () => {
//   console.log(this);
// };

// let a = {
//   b: 100,
//   x: function () {
//     console.log(this.b);
//   },
// };

// let xx = { b: 101 };

// a.x.call(xx);
// console.log(1);
// setTimeout(() => console.log(2));
// console.log(3);
// new Promise((resolve, reject) => {
//   console.log(4);
// })
//   .then(() => console.log(5))
//   .then((res, rej) => {
//     console.log(6);
//     res(0);
//   })
//   .then(console.log(7));

(function (a, b, c) {
  console.log(a && b | c);
})('1', [].length, 100);
