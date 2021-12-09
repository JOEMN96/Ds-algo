let a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hey');
  }, 2000);
});

// a.then((res) => console.log(res));

// Apply
let arr: number[] = [1, 2, 4, 5, 6, 78, 9];
let res = Math.max.apply('a', arr);
// console.log(res);

// Bind
let obj = {
  x: 100,
  y: function () {
    console.log(this);
  },
};
let obj2 = { x: 0 };

// let calX = obj.y;
// calX.bind(obj);
// calX();

// console.log(Object.assign(obj, obj2));
console.log();

function closure(a: string) {
  return function () {
    return a;
  };
}

let closureREs = closure('a');
// console.log(closureREs());

function whatIsThis() {
  // @ts-ignore
  console.log(this);
}

whatIsThis();
