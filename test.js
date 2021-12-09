function whatIsThis() {
  console.log(this == 'window');
}

let arrpw = () => {
  console.log(this);
};

let a = {
  b: 100,
  x: function () {
    console.log(this.b);
  },
};

let xx = { b: 101 };

a.x.call(xx);
