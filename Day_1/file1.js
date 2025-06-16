console.log('JS');

let fname = 'aditya';
console.log(fname);

const lname = 'Vshk';
console.log(lname);
console.log('-------------------------------------------');

// if - else
let age = 18;
if (age > 18) {
  console.log('Allowed to vote');
} else {
  console.log('Not allowed to vote');
}
console.log('-------------------------------------------');

// (if/else-if/else)
let a = 100;
let b = 3;
let c = 3;

if (a >= b && a >= c) {
  if (a == b && a == c && b == c) {
    console.log('All values are equal');
  } else {
    console.log('a is greater ! ');
  }
} else if (b >= a && b >= c) {
  if (a == b && a == c && b == c) {
    console.log('All values are equal');
  } else {
    console.log('b is greater !');
  }
} else {
  if (a == b && a == c && b == c) {
    console.log('All values are equal');
  } else {
    console.log('c is greater !');
  }
}
console.log('-------------------------------------------');

// (for loop)  && (while loop)
for (let i = 1; i <= 10; i++) {
  console.log(`${i} times`);
}
console.log('-------------------------------------------');

let start = 1;
let end = 10;
while (start <= end) {
  console.log(`${start} Only Three Months !!`);
  start++;
}
console.log('-------------------------------------------');

// print only even no
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} - Even No`);
  }
}
console.log('-------------------------------------------');

// Array

let arr = [1, 2, 3, 4, 5, 6];
let newArr = [];
console.log(arr);

for (let i = 0; i <= arr.length - 1; i++) {
  newArr.push(arr[i]);
}
console.log(newArr);

console.log('-------------------------------------------');

// Reverse the array
let arr1 = [10, 20, 30, 40, 50, 60];
let initial = 0;
let ending = arr.length - 1;

while (initial < ending) {
  let temp = arr1[initial];
  arr1[initial] = arr1[ending];
  arr1[ending] = temp;
  initial++;
  ending--;
}
console.log(arr1);
console.log('-------------------------------------------');

// Objects
let obj = {
  fname: 'aditya',
  lname: 'Vshk',
  age: 23,
  greeting: () => {
    console.log(`${fname}, Welcome to the World of JS `);
  },
  Myage: function () {
    let x = this.fname;
    let y = this.lname;
    console.log(x);
    console.log(y);
    console.log(this.age);
  },
};

obj.greeting();
obj.Myage();

console.log(obj.age);
console.log('-------------------------------------------');

// Modern way to create a class

class Person {
  constructor(name, age, color) {
    (this.name = name), (this.age = age), (this.color = color);
  }

  Greeting() {
    console.log('Hello there My name is ' + this.name);
  }

  Add(a, b) {
    console.log(a + b);
  }
}
let Aditya = new Person('aditya', 23, 'White');
Aditya.Add(10, 20);
Aditya.Greeting();

console.log('-------------------------------------------');

// Array methods

// 1) - push (Adds item to end)
let arr2 = [1, 2, 3, 4, 5, 6];
let arr3 = [];
console.log(arr3.push(arr2[1]));

// 2) pop - (Removes last item)

let outvalue = arr3.pop();
console.log(outvalue);

// 3) shift - (removes first item)
console.log(arr2);
arr2.shift();
console.log(arr2);

// 4) unshift - (add items to the start)

arr2.unshift(1);
console.log(arr2);

// 5) splice
// destructive permanently change the array list

// Remove elements using (splice)
let li1 = ['a', 'b', 'c', 'd'];
li1.splice(1, 2); // start at index 1, remove 2 items
console.log(li1);

let li2 = ['aditya', 'vshk', 'Rohit', 'Poonam'];
li2.splice(-1, 1); // remove the last element

let li3 = [1, 'adsad', 3, 'as', true, false, 'ax2'];
li3.splice(2, 4);
console.log(li3);

// Insert elements using (splice)
let add1 = ['a', 'd'];
add1.splice(1, 0, 'b', 'c'); // start at index 1, remove 0, insert 'b' and 'c'
console.log(add1); // ['a', 'b', 'c', 'd']

let add2 = ['aditya', 'joker', 'Brad'];
add2.splice(1, 0, 'Heena', 'Tiger');
console.log(add2);

// Replace elements using (splice)
let re1 = ['a', 'b', 'c'];
re1.splice(1, 1, 'x'); // start at index 1, remove 1, insert 'x'
console.log(re1); // ['a', 'x', 'c']

let re2 = [1, 2, 3, 4, 5, 6, 7, 8];
re2.splice(2, 2, 'f', 'j');
console.log(re2);

// 6) slice - undestructive no changes in original array

let arr10 = ['a', 'b', 'c', 'd', 'e'];
let result = arr10.slice(1, 4); // index 1 to 3
console.log(result); // ['b', 'c', 'd']
console.log(arr10); // ['a', 'b', 'c', 'd', 'e'] (unchanged)

let to1 = ['aditya', 'vhk', 'kolio', 'virat'];
console.log(to1.slice(1));
console.log(to1);

let to2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(to2.splice(0, 3));

// 7) - map() - Does not change the original array
// works on each element
//  A new array containing the results of calling the provided function on every element.

let ma1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = ma1.map((value) => {
  return value ** 2;
});

console.log(ans);

let users = [
  { name: 'Boss', age: 25 },
  { name: 'Coder', age: 30 },
];

let names_ans = users.map((value) => {
  return value.name;
});
console.log(names_ans);

let index1 = ['a', 'b', 'c'];
let ans_index = index1.map((value, index) => {
  return `${index}${value}`;
});

console.log(ans_index);

// 8) - filter - (Handle search, get users with a condition)
// filter() is an array method that returns a new array containing only the elements that
// pass a condition (i.e., return true from the callback function).

// Syntax
// array.filter(function(currentValue, index, array) {
//   return condition;
// });
//

// IMP : The return value must be a boolean (true to keep, false to discard).

let numbers = [1, 2, 3, 4, 5, 6];
let even_no = numbers.filter((value) => {
  if (value % 2 == 0) {
    return value;
  }
});
console.log(even_no);

// Filter active users
let users1 = [
  { name: 'Boss', active: true },
  { name: 'LazyDev', active: false },
  { name: 'Hustler', active: true },
];

let activeUsers = users1.filter((value) => {
  if (value.active == true) {
    return value;
  }
});
console.log(activeUsers);

let messy = [0, 'JS', '', false, 42, null, '🔥'];

let falsy_values = messy.filter(Boolean);
console.log(messy); 

// find() -
// find() is used to search an array and return the
// first element that satisfies a given condition.

let users_n = [
  { id: 1, name: 'Boss' },
  { id: 2, name: 'Hacker' },
  { id: 3, name: 'Boss' },
];

let n = users_n.find((value) => {
  return value.name === 'Boss';
});

console.log(n);

let arr90 = [10, 20, 30];
let result1 = arr90.find((n) => n > 50);
console.log(result1); // undefined



// findIndex 

// findIndex() searches an array and returns the index 
// of the first element that satisfies a condition.
// If no match is found, it returns -1 


// syntax 
// array.findIndex(function(currentValue, index, array) {
//   return condition;
// });


let nums = [3, 7, 9, 12, 15];

let index = nums.findIndex(function(num) {
  return num % 2 === 0;
});

console.log(index); // 3 (because 12 is at index 3)


let userss = [
  { id: 1, name: 'Boss' },
  { id: 2, name: 'Hacker' },
  { id: 3, name: 'Gamer' }
];

let idx = userss.findIndex(user => user.name === 'Hacker');

console.log(idx); // 1 




// includes  

// array.includes(valueToFind, fromIndex);

let numsss = [10, 20, 30, 40];

console.log(numsss.includes(20)); // true
console.log(numsss.includes(99)); // false

let nums1 = [1, 2, 3, 4, 5];

console.log(nums1.includes(2, 2)); // false (starts checking from index 2)


let str = "JavaScript is awesome";

console.log(str.includes("Script")); // true
console.log(str.includes("script")); // false (case-sensitive!)


let shoppingList = ['milk', 'bread', 'eggs'];
if (!shoppingList.includes('coffee')) {
  shoppingList.push('coffee');
}



// every()

// Syntax 
// array.every(function(currentValue, index, array) {
//   return condition;
// });

//  Example 1: Check if all numbers are positive
let nums2 = [2, 4, 6, 8];
let allPositive = nums2.every(function(num) {
  return num > 0;
});
console.log(allPositive); // true


// Example 2: Fails if even one breaks the rule
let scores = [90, 80, 100, 45];
let passed = scores.every(score => score >= 50);
console.log(passed); // false (because 45 flunked 😅)


// 🔥 Example 3: Objects in array
let users4 = [
  { name: 'Boss', active: true },
  { name: 'Dev', active: true },
  { name: 'Noob', active: false }
];
let allActive = users4.every(user => user.active);
console.log(allActive); // false



// 🟣 .some() → The chill one who’s like 
// “As long as one of y’all’s good, I’m good.”

// syntax 

// array.some(function(currentValue, index, array) {
//   return condition;
// });

// 🔥 Example 1: Check if any number is even
let nums5 = [1, 3, 5, 7, 8];

let hasEven = nums5.some(num => num % 2 === 0);

console.log(hasEven); // true (because 8 is even) 

// 🔥 Example 2: Check if any user is admin 
let users9 = [
  { name: 'Boss', role: 'user' },
  { name: 'Dev', role: 'admin' }
];

let isAdminPresent = users9.some(u => u.role === 'admin');

console.log(isAdminPresent); // true


// 🟡 .forEach() → The
//  “I’ll visit everyone but won’t return anything” method

// 🔧 Syntax:

// array.forEach(function(currentValue, index, array) {
//   // do something with each item
// });


// 🔥 Example 1: Print each element

let fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit) {
  console.log(fruit);
});


// 🔥 Example 2: Add numbers manually (not ideal for actual sum)

let nums10 = [10, 20, 30];
let sum = 0;

nums10.forEach(num => {
  sum += num;
});

console.log(sum); // 60



// What is .reduce()?
// reduce() is a method that reduces an array to a single value (number, string, object, array — you name it).
// It loops through the array, and on each step, it takes the result so far (called accumulator) 
// and the current value, and returns an updated result.

// Syntax 

// array.reduce(function(accumulator, currentValue, index, array) {
//   return updatedAccumulator;
// }, initialValue);

// 🔥 Basic Example: Sum of all numbers
let nums19 = [10, 20, 30];

let total = nums19.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(total); // 60


// 🔥 Example: Turn array into object
let users11 = [
  { id: 1, name: "Boss" },
  { id: 2, name: "Dev" }
];

let userMap = users11.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});

console.log(userMap);
// { 1: "Boss", 2: "Dev" }



// 🔥 Example: Count occurrences
let items = ['apple', 'banana', 'apple', 'orange', 'banana'];

let count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 2, banana: 2, orange: 1 }


console.log('-------------------------------------------');









console.log('-------------------------------------------');



// 🟩 1. Spread Operator (...)

// Used to spread out the values of an array or object.

// 🔥 Example: 

// let nums = [1, 2, 3];
// let newnos = [...nums,4,5,6,7];
// console.log(newnos);

// let user = { name: "Boss", age: 22 };
// let up = {...user,city:"Mumbai"}
// console.log(up);

// 🟥 2. Rest Operator (...)
// Looks the same as spread (...), but used to gather values into an array or object.

// 🔥 Example: Rest in Functions
// function sum(...numbers) {
//   return numbers.reduce((total, n) => total + n, 0);
// }

// console.log(sum(10, 20, 30)); // 60


// 🔥 Example: Rest in Destructuring 

let [first,...last] = [1,2,3,4,5];
console.log(first);
console.log(last);



// 🟦 3. Destructuring

// Unpacks values from arrays or properties 
// from objects into variables. Super clean. Super fast. ✨



// let arr12 = [100, 200, 300];
// let [a, b, c] = arr12;

// console.log(a); // 100
// console.log(b); // 200

// 🔥 Object Destructuring
// let person = { name: "Boss", age: 22 };
// let { name, age } = person;

// console.log(name); // "Boss"
// console.log(age);  // 22

// 🔥 Destructuring + Renaming
// let user = { username: "BossMan" };
// let { username: myName } = user;

// console.log(myName); // "BossMan"


console.log('-------------------------------------------');
console.log('-------------------------------------------');
console.log('-------------------------------------------');
console.log('-------------------------------------------');
console.log('-------------------------------------------');
console.log('-------------------------------------------');
