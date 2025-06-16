// Promises

// Level 0
// const promise = new Promise((resolve, reject) => {
//   resolve('Successful');
//   reject('Error');
// });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Level 1

// function wait(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('hello there');
//     }, time);
//   });
// }

// wait(2000).then((message) => {
//   console.log(message);
// });

// function waitAndGreet(name, seconds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, seconds);
//   });
// }

// waitAndGreet('aditya', 2000).then(() => {
//   console.log(`Welcome !!`);
// });

// function addafter2s(time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([10, 20]);
//     }, time);
//   });
// }

// addafter2s(2000).then(([a, b]) => {
//   console.log(Number(a) + Number(b));
// });

// function getData(time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ fname: 'aditya', age: '23' });
//     }, time);
//   });
// }

// getData(2000).then((user) => {
//   console.log(`Hello my name is ${user.fname} and my age is ${user.age}`);
// });

// // Example

// function riskeyjob(shouldfail) {
//   return new Promise((resolve, reject) => {
//     if (shouldfail) {
//       reject('Failed');
//     } else {
//       resolve('Succeed');
//     }
//   });
// }

// riskeyjob(false).then(console.log).catch(console.error);

// // new Promise((resolve) => resolve(2))
// //   .then((value) => {
// //     console.log(Number(value) * 2);
// //   })
// //   .then((value) => {
// //     console.log(Number(value) + 2);
// //   })
// //   .then((final) => {
// //     console.log(final);
// //   });

// // Chaining
// new Promise((resolve) => resolve(2))
//   .then((num) => num * 2)
//   .then((num) => num + 1)
//   .then((final) => console.log(final)); // 5

function flipcoin() {
  return new Promise((resolve, reject) => {
    const result = Math.random() > 0.5;
    if (result) {
      resolve('You win !!');
    } else {
      reject('You loss !!');
    }
  });
}

flipcoin().then(console.log).catch(console.log);

function multiplyAfterDelay(x, y, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x * y);
    }, delay);
  });
}

multiplyAfterDelay(10, 10, 2000).then(console.log).catch(console.err);

// Write fakeLogin(username, password)

//     If password === "1234", resolve with Welcome <username>

//     Else, reject with Wrong password!

// function fakelogin(username, password) {
//   return new Promise((resolve, reject) => {
//     if (password === 1234) {
//       resolve(username);
//     } else {
//       reject('Wrong Password ❌');
//     }
//   });
// }

// fakelogin('aditya', 12345)
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(console.log);

/// -------------------------------------------------------------------

