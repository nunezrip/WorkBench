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

// ANSWER: 26

let mult = (a, b) => a * b;
console.log(reduce([4, 3, 5, 8, 6], mult, 1));

// ANSWER: 2880

let div = (a, b) => Math.ceil(a / b);
console.log(reduce([4, 3, 5, 8, 6], div, 1));

// ANSWER: 1

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

// ANSWER: ['name', 'age', 'hasPets']

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

console.log('increaseByTwo (Original Array): ' + increaseByTwo);
console.log('NewArray: ' + increaseArray());

// ANSWER: 
// increaseByTwo(Original Array): 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// NewArray: 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

// Increase array with callback function

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let len = array.length;
// let newArray = [];

function increaseArray(array, callback, initialValue = 0, wildCardNum) {
  var accumulator = initialValue;
  for (let i = 0; i < len; i++) {
    accumulator = (callback(accumulator, array[i])) * wildCardNum;
  };
  // console.log(accumulator);
  return accumulator;
}

let add = (x, y) => x + y;
console.log(increaseArray(array, add, 0, Math.ceil(.99)));

// ANSWER: 55



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

// ANSWER: Found randomNum!


// Update number function ???????

function update(callback) { 
  const output = []; 
  for (let i = 0; i < array.length; i++) {   
    const updated = callback(array[i]);   
    output.push(updated); 
  }
  return output;
}

console.log(update(10));
// console.log(update(20));
// console.log(update(30));
// console.log(update(40));
// console.log(update(50));




const mapWith = (arr, callback) => {
  const output = [];
  forEach(arr, callback, (newArr = output));
  return output;
};
console.log(mapWith(array, item => {
  newArr.push(item + 100);
}), );


// Sum up all values within an array ???????

var total = [0, 1, 2, 3].reduce(function (a, b) {     
  return a + b;  
});  
// total == 6   


// Example: Flatten an array of arrays ????????
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce(function (a, b) {     
  return a.concat(b);  
});  
console.log(reduce());

// flattened is [0, 1, 2, 3, 4, 5]  


const arr = [1, 2, 3, 4];

arr.reduce((acc, curr) => acc + curr)


// Challenges Set B
// Challenge 4
// Now we are going to create a function addByX that returns a function that will add an input by x.

function addByX(x) {
  return function addByNum(input) {
    return input + x;
  };
  // return addByNum;
}

var addByTwo = addByX(2);
console.log(addByTwo(1)); //should return 3
console.log(addByTwo(2)); //should return 4

var addByTen = addByX(10);
console.log(addByTen(10)); //should return 20
console.log(addByTen(20)); //should return 30


// Challenge 5
// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.


function once(func) {
  var results;
  return function () {
    if (func) {
      console.log(arguments);
      result = func.apply(null, arguments);
      func = null;
    }
    return results;
  };
}

var onceFunc = once(addByTwo);
// console.log(onceFunc.toString());
console.log(onceFunc(4));
console.log(onceFunc(3));
console.log(onceFunc(2));


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = () => {
  let newArr = arr.map(x => x * 2);
  console.log(newArr);
}

newArray();


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = () => {
  let newArr = arr.map(x => x - 2);
  console.log(newArr);
}

newArray();

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = () => {
  let newArr = arr.map(x => x + 10);
  console.log(newArr);
}

newArray();

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length === 5);

console.log(result);


var kvArray = [{
    key: 1,
    value: 10
  },
  {
    key: 2,
    value: 20
  },
  {
    key: 3,
    value: 30
  }
];

var reformattedArray = kvArray.map(obj => {
  var rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
})

console.log(rObj);

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

new Map([
    ['foo', 3],
    ['bar', {}],
    ['baz', undefined]
  ])
  .forEach(logMapElements);






// Sorting largest to smallest (b - a)
var array = [1, 12, 21, 2];
console.log('Old Array (Original): ' + array);
array.sort(function (a, b) {
  return b - a;
});

console.log('New Array (Mutated): ' + array);

// ANSWER:
// Old Array(Original): 1, 12, 21, 2
// New Array(Mutated): 21, 12, 2, 1

// Sorting smallest to largest (a - b)
var array = [1, 12, 21, 2];
console.log('Old Array (Original): ' + array);
array.sort(function (a, b) {
  return a - b;
});

console.log('New Array (Mutated): ' + array);

// ANSWER:
// Old Array(Original): 1, 12, 21, 2
// New Array(Mutated): 1, 2, 12, 21

// Reversing an array
var array = [1, 2, 3, 4, 5, 6, 7];
var newArray = [];

console.log('array (Original): ' + array);
newArray = array.reverse();
console.log('array (Mutated): ' + array);
console.log('newArray: ' + newArray);

// ANSWER:
// array(Original): 1, 2, 3, 4, 5, 6, 7
// array(Mutated): 7, 6, 5, 4, 3, 2, 1
// newArray: 7, 6, 5, 4, 3, 2, 1

// Concatenate Arrays with concat

var oldArray = [1, 2, 3];
var newArray = [];

var concatMe = [4, 5, 6];

newArray = oldArray.concat(concatMe);

console.log('Old Array: ' + oldArray);
console.log('concatMe Array: ' + concatMe)
console.log('New Array: ' + newArray);

// ANSWER:
// Old Array: 1, 2, 3
// concatMe Array: 4, 5, 6
// New Array: 1, 2, 3, 4, 5, 6


// Split Strings with split
var string = "Split me into an array";
var array = [];

array = string.split(' ');
console.log(array);

// ANSWER:
// ['Split', 'me', 'into', 'an', 'array']

// Join Strings with join

var joinMe = ["Join", "me", "into", "a", "sentence"];
var joinedString = '';

joinedString = joinMe.join(' ');

console.log(joinedString);

// ANSWER:
// Join me into a sentence

// Reversing a String

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Mississippi'));
console.log(reverseString('California'));

// ANSWER:
// ippississiM
// ainrofilaC

// Iterate over Arrays with map
// Map generates a new array without mutating the original

var oldArray = [1, 2, 3, 4, 5];

var newArray = oldArray.map(function (val) {
  return val + 3;
});

console.log('Old Array: ' + oldArray);
console.log('New Array: ' + newArray);

// ANSWER:
// Old Array: 1, 2, 3, 4, 5
// New Array: 4, 5, 6, 7, 8

// Condense arrays with reduce

var array = [4, 5, 6, 7, 8];
var singleVal = 0;

singleVal = array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log('Array: ' + array);
console.log('Single Value: ' + singleVal);

// ANSWER:
// Array: 4, 5, 6, 7, 8
// Single Value: 30



// Filter Arrays with filter
// Filter generates a new array without mutating the original

var oldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var newArray = oldArray.filter(function (val) {
  return val < 6;
});

console.log('Old Array: ' + oldArray);
console.log('New Array: ' + newArray);

// ANSWER:
// Old Array: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// New Array: 1, 2, 3, 4, 5


// Sort Arrays with sort
// Sort mutates the original array

var array = [1, 12, 21, 2];
console.log('Old Array: ' + array);

array.sort(function (a, b) {
  return b - a;
});

console.log('New Sorted Array: ' + array);

// ANSWER:
// Old Array: 1, 12, 21, 2
// New Sorted Array: 21, 12, 2, 1

// Factorilize a Number with RECURSION

function factorialize(num) {
  if (num < 0)
    return -1;
  else if (num == 0)
    return 1;
  else {
    return (num * factorialize(num - 1));
  }
}
console.log(factorialize(2)); //return 2
console.log(factorialize(5)); //return 120
console.log(factorialize(10)); //return 3628800
console.log(factorialize(15)); //return 1307674368000
console.log(factorialize(20)); //return 2432902008176640000
console.log(factorialize(25)); //return 1.5511210043330986e+25
console.log(factorialize(50)); //return 3.0414093201713376e+64

// Factorilize a Number with WHILE Loop

function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1)
    return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

console.log(factorialize(2)); //return 2
console.log(factorialize(5)); //return 120
console.log(factorialize(10)); //return 3628800
console.log(factorialize(15)); //return 1307674368000
console.log(factorialize(20)); //return 2432902008176640000
console.log(factorialize(25)); //return 1.5511210043330986e+25
console.log(factorialize(50)); //return 3.0414093201713376e+64



// Factorilize a Number with FOR Loop

function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorialize(2)); //return 2
console.log(factorialize(5)); //return 120
console.log(factorialize(10)); //return 3628800
console.log(factorialize(15)); //return 1307674368000
console.log(factorialize(20)); //return 2432902008176640000
console.log(factorialize(25)); //return 1.5511210043330986e+25
console.log(factorialize(50)); //return 3.0414093201713376e+64


// Check for Palindromes

function palindrome(str) {
  //assign a front and a back pointer
  let front = 0;
  let back = str.length - 1;

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    while (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }
    //decrements back pointer if current character doesn't meet criteria
    while (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }
    //finally does the comparison on the current character
    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false
    front++;
    back--;
  }

  //if the whole string has been compared without returning false, it's a palindrome!
  return true;

}

console.log(palindrome('sierra')); //return false
console.log(palindrome('moom')); //return true
console.log(palindrome('moom')); //return true
console.log(palindrome('eye')); //return true
console.log(palindrome('race car')); //return true
console.log(palindrome('A man, a plan, a canal. Panama')); //return true


// Find the Longest Word in a String

function findLongestWord(str) {
  var words = str.split(' ');
  var maxLength = 0;
  var longestWord = '';

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {;
      maxLength = words[i].length;
      longestWord = words[i];
    }

  }
  console.log(maxLength); //returns 6
  console.log(longestWord); //returns jumped
  return maxLength;
}
findLongestWord("The quick brown fox jumped over the lazy dog");


// Title Case a Sentence

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  console.log(result.join(' '));
  return result.join(' ');
}

titleCase("I'm a little tea pot");
// returns: I'm A Little Tea Pot

// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }
  console.log(results); //returns: [ 5, 27, 39, 1001 ]
  return results;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// Confirm Ending

function confirmEnding(str, target) {
  console.log('The word \"' + str + '\" ends with \"' + target + '\"');
  return str.substr(-target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Europe", "p"));

// Repeat a string repeat a string

function repeatStringNumTimes(str, num) {
  if (num > 0) {
    return str.repeat(num);
  }
  return "";
}

console.log(repeatStringNumTimes("abc", 3)); //Returns abcabcabc

// Truncate a String

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11)); //returns A-tisket...