 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()

var array = ["5", "3", "6", "1Syntax", "Word"];
array.sort();

// .concat()

array2 = ["a", "b", "c", "d"];
array3 = [array.concat(array2)];

console.log(array3);

// .indexOf()

// .split()

var str = "Apples are round, and apples are juicy.";
       var splitted = str.split(" ", 3);

       document.write( splitted );

// .join()

var fruits = ["apple", "banana", "pear", "orange", "doolean"];
var energy = fruits.join()

console.log(fruits);
console.log(energy);

// .pop()

var numbers = ["1", "2", "3", "4"];
var element = numbers.pop();

console.log(element);

// .push()

var numbers = ["1", "2", "3", "4"];
var element = numbers.push(153);

console.log(numbers);

// .slice()

var numbers = ["1", "2", "3", "4"];
var element = numbers.slice(0,2);

console.log(element);

// .splice()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(3, 0, "Lemon");
    fruits.splice(5, 0, "Kiwi")

console.log(fruits);

// .shift()

var element = [105, 1, 2, 3].shift();
    console.log("Removed element is : " + element );

// .unshift()

var element = ["Banana", "Apple", "Kiwi", "Sock"];
element.unshift("Happy", "Gold");

console.log(element);

// .filter()

// .map()
