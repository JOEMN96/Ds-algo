function whatIsThis() {
  console.log(this == 'window');
}

let arrpw = () => {
  console.log(this);
};

let a = {
  b: 100,
  x: () => {
    console.log(this);
  },
};

whatIsThis();
