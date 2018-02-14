// 
// Reduce Function

function reduce(array, callback, initialValue = 0) {
  var accumulator = initialValue;
  const len = array.length;

  for (let i = 0; i < len; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

// Callback functions:

let add = (a, b) => a + b;
console.log(reduce([4, 3, 5, 8, 6], add, 0));

let mult = (a, b) => a * b;
console.log(reduce([4, 3, 5, 8, 6], mult, 1));

let div = (a, b) => Math.ceil(a / b);
console.log(reduce([4, 3, 5, 8, 6], div, 1));

// Challenge 2

// Write a function called "getAllKeys" which returns an array of all the input object's keys.

var object = {
  name: 'Sam',
  age: 25,
  hasPets: true,
};

function getAllKeys(obj) {
  var arrKey = [];
  var arrValue = [];
  var i = 0;
  for (var key in obj) {
    arrKey.push(key);
    arrValue.push(Object.values(object)[i]);
    i++;
  }
  // console.log(Object.values(object));
  // console.log(object);
  // console.log(arrValue);
  return arrKey
}

console.log(getAllKeys(object));

// Increase by two array function

let increaseByTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let len = increaseByTwo.length;
let newArray = [];

function increaseArray() {
  for (let i = 0; i < len; i++) {
    newArray.push(increaseByTwo[i] + 2);
  };
  return newArray;
}

console.log(increaseArray());

// Increase array with callback function

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let len = array.length;
// let newArray = [];

function increaseArray(array, callback, initialValue = 0, wildCardNum) {
  var accumulator = initialValue;
  for (let i = 0; i < len; i++) {
    accumulator = (callback(accumulator, array[i])) * wildCardNum;
  };
  console.log(accumulator);
  return accumulator;
}

let add = (x, y) => x + y;
console.log(increaseArray(array, add, 0, .99));

// let mult = (x, y) => (x * y) * accumulator;
// console.log(increaseArray(array, mult, 1));

// Has own property function

let checkObject = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
}

var findProp = (obj) => {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (prop === 'randomNum') return 'Found ' + prop + '!';
    }
  }
  return 'The number does not exists';
}

console.log(findProp(checkObject));