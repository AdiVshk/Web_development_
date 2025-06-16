console.log('Hello there !!!');

const fs = require('fs');

// Reading a file asynchoronusly

// fs.readFile('a.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('ERROR!! Incorret file !!');
//   } else {
//     console.log(data);
//   }
// });

// Writing in a  file

// fs.writeFile('b.txt', 'Hello World', (err) => {
//   if (err) {
//     console.log('Error !!');
//   }
//   console.log('Done !!!');
// });

const path = require('path');
// Path methods

// | Method            | What it does             | Example                                                 |
// | ----------------- | ------------------------ | ------------------------------------------------------- |
// | `path.join()`     | Joins path segments      | `path.join('folder', 'file.txt')` → `'folder/file.txt'` |
// | `path.resolve()`  | Resolves absolute path   | `path.resolve('file.txt')` → `'C:/Users/You/file.txt'`  |
// | `path.basename()` | Gets file name from path | `path.basename('/a/b/c.txt')` → `'c.txt'`               |
// | `path.dirname()`  | Gets folder name         | `path.dirname('/a/b/c.txt')` → `'/a/b'`                 |
// | `path.extname()`  | Gets extension           | `path.extname('index.html')` → `'.html'`                |

let full = path.resolve('file1.js');
console.log(full);

let fullpath = path.join(__dirname, 'c.txt');
console.log(fullpath);
fs.writeFile(fullpath, 'Hello BOSS !!!', () => console.log('Done !! '));

console.log('Hahaha ha file2.js');
