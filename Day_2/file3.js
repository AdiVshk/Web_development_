const fs = require('fs').promises;

function printmsg() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hi there whats up');
    }, 2000);
  });
}

async function print() {
  try {
    let ans = await printmsg();
    console.log(ans);
  } catch (error) {
    console.error('I dont know ');
  }
}

print();

async function readingFile() {
  try {
    let data = await fs.readdir('.');
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('file not found');
  }
}

readingFile();

function add2number(a, b) {
  return new Promise((resolve) => {
    console.log(a * b);
    resolve();
  });
}

async function getans() {
  try {
    await add2number(10, 10);
  } catch (err) {
    console.error('something went worong');
  }
}

getans();

async function readcontent() {
  try {
    let content = await fs.readFile('a.txt', 'utf-8');
    console.log(content);
  } catch (err) {
    console.error('hahahah error !!');
  }
}
readcontent();
