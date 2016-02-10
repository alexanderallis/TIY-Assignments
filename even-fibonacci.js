var calc = [0,1];
var numbers = [];
var numbersFiltered = [];
var total = 0;
for (var next= 0; next < 3e6;) {
    var next = calc[0] + calc[1];
    calc.push(next);
    calc.shift();
    numbers.push(next);
    // console.log(calc);
    // console.log(numbers);
}

for (var i = 0; i < numbers.length; i++) {
    var item = numbers[i];
    if (item % 2 ===0) {
      numbersFiltered.push(item);
    //   console.log(numbersFiltered);
    }
  }

for (var i = 0; i < numbersFiltered.length; i++){
total = total + numbersFiltered[i];
}
console.log(total);

  // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  // Find the sum of all the multiples of 3 or 5 below 1000.


  for (var i = 0; i < 1000; i++) {
    var counter = i;
    numbers.push(counter);
    // console.log(numbers);
}

for (var i = 0; i < 1000; i++) {
    var num = numbers[i];
    if (num % 3 === 0){
        numbersFac.push(num);
    }
}

for (var i = 0; i < 1000; i++) {
    var num = numbers[i];
    if (num % 5 === 0){
        numbersFac.push(num);
    }
}

console.log(numbersFac);

var total = 0;

for (var i = 0; i < numbersFac.length; i++){
total = total + numbersFac[i];
}
console.log(total);


// var arr = [0,1];
//
// for (var next= 0; next < 3e6;next++) {
//     var next = arr[0] + arr[1];
//     arr.push(next);
//     arr.shift();
//     console.log(arr);
// }
//
//
//
// var arr = [0,1];
// var sum = [];
// for (var next= 0; next < 3e6;) {
//     var next = arr[0] + arr[1];
//     arr.push(next);
//     arr.shift();
//     sum.push(next);
//     console.log(arr);
//     console.log(sum);
// }
//
// for (var i = 0; i+=3; i++; i<100){
//     sum.splice(i, 1);
//
// }
//
//
// 2,
//   3,
//   5,
//   13,
//   21,
//   34,
//   89,
//   144,
//   233,
//   610,
//   987,
//   1597,
//   4181,
//   6765,
//   10946,
//   28657,
//   46368,
//   75025,
//   196418,
//   317811,
//   514229,
//   1346269,
//   2178309,
//   3524578
//
//   1,
//  2,
//  3,
//  5,
//  8,
//  13,
//  21,
//  34,
//  55,
//  89,
//  144,
//  233,
//  377,
//  610,
//  987,
//  1597,
//  2584,
//  4181,
//  6765,
//  10946,
//  17711,
//  28657,
//  46368,
//  75025,
//  121393,
//  196418,
//  317811,
//  514229,
//  832040,
//  1346269,
//  2178309,
//  3524578 ]
