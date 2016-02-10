var hundred = [];

for (var integer = 0; integer < 100; integer++){
    hundred.push(integer);
}
// console.log(hundred);

for (var i = 0; i < 1000; i++){
    var num = hundred[i];
    if (num % 3 === 0){
       hundred.splice(i, 1, "Fizz");
    }
    if (num % 5 === 0){
        hundred.splice(i, 1, "Buzz");
    }

    if (num % 3 ===0 & num % 5 ===0){
        hundred.splice(i, 1, "FizzBuzz");
    }
}

console.log(hundred);
