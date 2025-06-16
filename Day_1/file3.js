// SetTimeout

// 1st way

// setTimeout(callback, 3000);
// function callback() {
//   console.log('Hello there after 3s');
// }

// 2nd way using Arrow functions 

// setTimeout(() => console.log('Hello there after 5s'), 5000);

// SetInterval
let count = 0;
const id = setInterval(function () {
  count++;
  console.log(count);
}, 1000);

setTimeout(() => {
  clearInterval(id); // emergency brake
}, 5000);

