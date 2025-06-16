// (async/await)

//-------------------------------------------------------------------
// 1st Way

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Hello there !! ');
//     }, 2000);
//   });
// }

// async function showData() {
//   try {
//     let data = await getData();
//     console.log(data);
//   } catch (err) {
//     console.log('Something went wrong !!', err);
//   }
// }

// showData();

// ------------------------------------------------------------------

// 2nd Way
// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Hi there How are you !!! ');
//       resolve();
//     }, 2000);
//   });
// }

// async function showData() {
//   try {
//     await getData();
//   } catch (err) {
//     console.log('Something went wrong !!', err);
//   }
// }

// showData();
//-----------------------------------------------------------------

// Example Making Maggi

// function boilWater() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Water boiled - Done ');
//       resolve();
//     }, 2000);
//   });
// }

// function addMaggi() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Maggi Added  - Done ');
//       resolve();
//     }, 2000);
//   });
// }

// function addMasala() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Masala added - Done ');
//       resolve();
//     }, 2000);
//   });
// }

// async function makeMaggi() {
//   try {
//     await boilWater();
//     await addMaggi();
//     await addMasala();
//     console.log('Maggi Ready to eat !! ');
//   } catch (err) {
//     console.error('Something burnt !! 🔥');
//   }
// }

// makeMaggi();

// --------------------------------------------------------------

// multiplyafter2s

// function multiplyafter2s(a, b, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a * b);
//     }, delay);
//   });
// }

// async function getData() {
//   try {
//     let ans = await multiplyafter2s(10, 10, 2000);
//     console.log(ans);
//   } catch (err) {
//     console.error('Something is missing !! ', err);
//   }
// }

// getData();

// --------------------------------------------------------------

const fs = require('fs');

function readingFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('aaaa.txt', 'utf-8', (err, data) => {
      if (data) {
        console.log(data + '😃');
        resolve();
      } else {
        reject('404 ! Not found 😔 ');
      }
    });
  });
}

async function readData() {
  try {
    await readingFile();
  } catch (err) {
    console.log(err);
  }
}

readData();

// ----------------------------------------------------------------



