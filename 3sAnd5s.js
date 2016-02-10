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
